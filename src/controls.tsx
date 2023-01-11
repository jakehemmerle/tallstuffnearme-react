import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Controls({
  options,
  handleChange,
  handleScaleChange,
  handleNavigationChange,
  handleFullScreenChange,
  handleGeolocateChange,
}: any) {
  const children = (
    <Box
      className="m-auto"
      sx={{ display: "flex", flexDirection: "row", ml: 3 }}
    >
      <FormControlLabel
        label="Scale Control"
        control={<Checkbox checked={options[0]} onChange={handleScaleChange} />}
      />
      <FormControlLabel
        label="Navigation Control"
        control={
          <Checkbox checked={options[1]} onChange={handleNavigationChange} />
        }
      />
      <FormControlLabel
        label="Fullscreen Control"
        control={
          <Checkbox checked={options[2]} onChange={handleFullScreenChange} />
        }
      />
      <FormControlLabel
        label="Geolocate Control"
        control={
          <Checkbox checked={options[3]} onChange={handleGeolocateChange} />
        }
      />
    </Box>
  );

  return (
    <div
      className="opacity-75"
      style={{
        zIndex: 10,
        backgroundColor: "gray",
        borderRadius: "10px",
        margin: "10px",
        backfaceVisibility: "hidden",
        color: "black",
        position: "absolute",
      }}
    >
      <FormControlLabel
        label="Show Controls"
        control={
          <Checkbox
            checked={options[0] && options[1] && options[2] && options[3]}
            indeterminate={options[1]}
            onChange={handleChange}
          />
        }
      />
      {children}
    </div>
  );
}
