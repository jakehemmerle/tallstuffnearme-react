import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grow from "@mui/material/Grow";
import Switch from "@mui/material/Switch";
import { Fragment, useState } from "react";
import { ObjectTypeEvent } from "./app.model";

interface Props {
  objectTypes: ObjectTypeEvent[];
  setObjectTypeList: (updatedObjectTypes: ObjectTypeEvent[]) => void;
}

export default function ObjectTypesComponent({
  objectTypes,
  setObjectTypeList,
}: Props): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleSwitchChange = (objectType: ObjectTypeEvent) => {
    const newObjectTypes = objectTypes.map((obj) => {
      if (obj.value === objectType.value) {
        obj.checked = !obj.checked;
      }
      return obj;
    });
    setObjectTypeList(newObjectTypes);
  };

  return (
    <div className="object-types glass-effect">
      {open}
      <FormControlLabel
        control={<Switch checked={open} onChange={() => setOpen(!open)} />}
        label="Object Types"
        className="object-types-switch"
      />

      <div
        className="object scroll scroll-5"
        style={{
          overflow: open ? "auto" : "hidden",
          height: open ? "50vh" : "min-content",
          marginTop: "0.625rem",
        }}
      >
        {open &&
          objectTypes.map((objectType, index: number) => {
            return (
              <Fragment key={index}>
                <Grow in={open}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={objectType.checked}
                        onChange={() => handleSwitchChange(objectType)}
                      />
                    }
                    label={objectType.value}
                  />
                </Grow>
                <Divider light />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}
