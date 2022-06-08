import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {
  convertStatus,
  convertPriority,
  convertRating,
} from "../helpers/conversionTable";

const filterConversions = {
  nothing: [],
  priority: ["High", "Medium", "Low"],
  status: [convertStatus[3], convertStatus[2], convertStatus[1]],
  rating: ["Worth it", "Not worth it", "Playing/Dunno"],
};

function GameFilter(props) {
  const { filterParam, handleFilterParam, filter, handleFilter } = props;
  return (
    <>
      <FormControl
        style={{ width: "10%", backgroundColor: "white", marginRight: "1rem" }}
      >
        <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter by"
          value={filter}
          onChange={handleFilter}
        >
          <MenuItem value="N/A">N/A</MenuItem>
          <MenuItem value="priority">Priority</MenuItem>
          <MenuItem value="status">Status</MenuItem>
          <MenuItem value="rating">Rating</MenuItem> doesn't currently work so
          will work on it later
        </Select>
      </FormControl>
      {filter !== "N/A" && (
        <FormControl
          style={{
            width: "10%",
            backgroundColor: "white",
            marginRight: "1rem",
          }}
        >
          <InputLabel id="demo-simple-select-label">{filter}</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Filter by"
            value={filterParam}
            onChange={handleFilterParam}
          >
            {filterConversions[filter].map((opt) => (
              <MenuItem value={opt} key={opt}>
                {opt}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
}

export default GameFilter;
