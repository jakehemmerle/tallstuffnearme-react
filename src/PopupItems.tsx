import { Properties } from "./app.model";

interface Props {
  properties: Properties;
}
export default function PopupItems({ properties }: Props) {
  return (
    <>
      <li>Object Type: {properties.ObjectType}</li>
      <li>Country: {properties.Country}</li>
      {properties.State && <li>State: {properties.State}</li>}
      {properties.City && <li>City: {properties.City}</li>}
      {properties.OASNumber && <li>OAS Number: {properties.OASNumber}</li>}
      {properties.Verified && <li>Is Verified: {properties.Verified}</li>}
      {properties.Latitude && <li>Latitude: {properties.Latitude}</li>}
      {properties.Longitude && <li>Longitude: {properties.Longitude}</li>}
      {properties.Longitude && <li>Longitude: {properties.Longitude}</li>}
      {properties.AGL && <li>AGL: {properties.AGL}</li>}
      {properties.AMSL && <li>AMSL: {properties.AMSL}</li>}
      {properties.LT && <li>LT: {properties.LT}</li>}

      {properties.H && <li>H: {properties.H}</li>}

      {properties.AccV && <li>AccV: {properties.AccV}</li>}

      {properties.AccV && <li>AccV: {properties.AccV}</li>}

      {properties.MarInd && <li>MarInd: {properties.MarInd}</li>}

      {properties.MarInd && <li>MarInd: {properties.MarInd}</li>}

      {properties.FAAStudyNumber && (
        <li>FAAStudyNumber: {properties.FAAStudyNumber}</li>
      )}

      {properties.Action && <li>Action: {properties.Action}</li>}

      {properties.JDate && <li>JDate: {properties.JDate}</li>}

      {properties.distanceFromLocation && (
        <li>distanceFromLocation: {properties.distanceFromLocation}</li>
      )}
    </>
  );
}
