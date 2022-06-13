import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {
  convertStatus,
  convertPriority,
  convertRating,
} from "../../../helpers/conversionTable";

const filterConversions = {
  priority: ["High", "Medium", "Low"],
  status: [
    convertStatus[3],
    convertStatus[2],
    convertStatus[1],
    convertStatus[0],
    //want to make it where 2/1 don't pop up if it's ordered by rating
  ],
  rating: ["Worth it", "Not worth it"],
};

function GameFilter(props) {
  const { filterParam, handleFilterParam, filter, handleFilter, orderBy } =
    props;
  return (
    <>
      <FormControl style={{ width: "20%", marginRight: "1rem" }}>
        <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter by"
          value={filter}
          onChange={handleFilter}
        >
          <MenuItem value="N/A">N/A</MenuItem>
          <MenuItem value="status">Status</MenuItem>
          {orderBy !== "Rating" && (
            <MenuItem value="priority">Priority</MenuItem>
          )}
          {orderBy !== "Priority" && <MenuItem value="rating">Rating</MenuItem>}
        </Select>
      </FormControl>
      {filter !== "N/A" && (
        <FormControl
          style={{
            width: "20%",

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
