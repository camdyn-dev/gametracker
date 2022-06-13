import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
//gotta fix these, the boxse are way too small on mobile devices
//it's the shitty autoset width that I've got going on

function GameOrder(props) {
  const { orderBy, handleOrderBy, orderD, handleOrderD, filter } = props;
  const orderDirection = ["High -> Low", "Low -> High"];

  return (
    <>
      <FormControl style={{ width: "20%", marginRight: "1rem" }}>
        <InputLabel id="demo-simple-select-label">Order by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter by"
          value={orderBy}
          onChange={handleOrderBy}
        >
          <MenuItem value="N/A">N/A</MenuItem>
          {filter !== "rating" && (
            <MenuItem value="Priority">Prioritiy</MenuItem>
          )}

          <MenuItem value="Status">Status</MenuItem>
          {filter !== "priority" && <MenuItem value="Rating">Rating</MenuItem>}
          <MenuItem value="Post date">Post date</MenuItem>
        </Select>
      </FormControl>
      {orderBy !== "N/A" && (
        <FormControl
          style={{
            width: "20%",

            marginRight: "1rem",
          }}
        >
          <InputLabel id="demo-simple-select-label">Direction</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Filter by"
            value={orderD}
            onChange={handleOrderD}
          >
            {orderDirection.map((opt) => (
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

export default GameOrder;
