import { FormLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

interface Props {
  rangeValues: number[];
  rangeHandler: (value: number[]) => void;
}

function ZoomSlider({ rangeValues, rangeHandler }: Props): JSX.Element {
  const handleChange = (event: Event, newValue: number | number[]) => {
    rangeHandler(newValue as number[]);
  };

  return (
    <div className="glass-effect slider">
      <Box>
        <FormLabel>Bulidings height range: </FormLabel>
        <Slider
          max={2000}
          getAriaLabel={() => "Building height range"}
          value={rangeValues}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
    </div>
  );
}

export default ZoomSlider;
