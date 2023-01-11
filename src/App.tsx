import { debounce } from "lodash";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
  ViewStateChangeEvent,
} from "react-map-gl";
import "./App.css";
import {
  ExampleResponse,
  Feature,
  ObjectType,
  ObjectTypeEvent,
  RequestBody,
} from "./app.model";
import ObjectTypesComponent from "./ObjectTypes";
import PopupItems from "./PopupItems";
import ZoomSlider from "./ZoomSlider";

const ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export default function App(): JSX.Element {
  // States
  const [geoData, setGeoData] = useState<ExampleResponse>(
    {} as ExampleResponse
  );
  const [popupInfo, setPopupInfo] = useState<Feature | null>(null);
  const [rangeValues, setRangeValues] = useState([75, 2000]);

  let objectTypeList: ObjectTypeEvent[];
  let setObjectTypeList: React.Dispatch<
    React.SetStateAction<ObjectTypeEvent[]>
  >;
  [objectTypeList, setObjectTypeList] = useState([] as ObjectTypeEvent[]);

  const getData = (reqBody: RequestBody) => {
    const baseURL = process.env.REACT_APP_API_URL;
    fetch(`${baseURL}/objects`, {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data: ExampleResponse) => {
        setGeoData(data);

        const objectTypes = data.features?.map(
          (feature) => feature.properties?.ObjectType
        );
        const uniqueObjectTypes = objectTypes?.filter(
          (value, index, self) => self.indexOf(value) === index
        );

        // after getting response populate the objectTypesList
        const values = Object.keys(ObjectType).map((key) => {
          const value = key as ObjectType;
          return {
            checked: uniqueObjectTypes?.includes(value),
            value,
          };
        });

        setObjectTypeList(values);
      });
  };

  const getUpdatedData = debounce((event: ViewStateChangeEvent) => {
    const { latitude, longitude } = event.viewState;
    const body = { latitude, longitude, radius: 1 };
    getData(body);
  }, 1000);

  return (
    <div style={{ position: "relative" }}>
      <Map
        style={{
          width: "100vw",
          height: "100vh",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={ACCESS_TOKEN}
        scrollZoom={false}
        onZoomEnd={getUpdatedData}
        onDragEnd={getUpdatedData}
      >
        <ObjectTypesComponent
          objectTypes={objectTypeList}
          setObjectTypeList={setObjectTypeList}
        />
        <div>
          <ScaleControl maxWidth={100} unit="metric" position="bottom-right" />

          <NavigationControl
            showCompass={true}
            showZoom={true}
            position="bottom-right"
          />
          <FullscreenControl position="bottom-right" />
          <GeolocateControl position="bottom-right" />
        </div>

        {geoData.features &&
          geoData.features.map(
            (feature, index) =>
              objectTypeList?.find(
                (object) => object.value === feature.properties?.ObjectType
              )?.checked &&
              feature.properties.AGL > rangeValues[0] &&
              feature.properties.AGL <= rangeValues[1] && (
                <Marker
                  key={index}
                  latitude={feature.properties.Latitude}
                  longitude={feature.properties.Longitude}
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setPopupInfo(feature);
                  }}
                >
                  <i
                    className="bi bi-geo-alt-fill"
                    style={{
                      fontSize: "25px",
                      color: "rgb(25, 118, 210)",
                    }}
                  ></i>
                </Marker>
              )
          )}
        {popupInfo && (
          <Popup
            latitude={popupInfo.properties.Latitude}
            longitude={popupInfo.properties.Longitude}
            anchor="bottom"
            closeButton={true}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}
            style={{
              minWidth: "max-content",
              padding: "5px",
              paddingRight: "10px",
            }}
          >
            <div className="mt-3 scroll scroll-5 custom-popup">
              <PopupItems properties={popupInfo.properties} />
            </div>
          </Popup>
        )}
      </Map>
      <ZoomSlider rangeValues={rangeValues} rangeHandler={setRangeValues} />
    </div>
  );
}
