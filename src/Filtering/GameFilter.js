import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const filterConversions = {
  nothing: [],
  priority: ["High", "Medium", "Low"],
  status: ["Completed", "In Progress", "Lightly/Unplayed"],
};

function GameFilter(props) {
  const { filterParams, handleFilterParams, filter, handleFilter } = props;
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
          <MenuItem value="nothing">Nothing</MenuItem>
          <MenuItem value="priority">Priority</MenuItem>
          <MenuItem value="status">Completion status</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>
      {filter !== "nothing" && (
        <FormControl
          style={{
            width: "10%",
            backgroundColor: "white",
            marginRight: "1rem",
          }}
        >
          <InputLabel id="demo-simple-select-label">{filter}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Filter by"
            value={filterParams}
            onChange={handleFilterParams}
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
