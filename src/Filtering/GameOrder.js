import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const orderOptions = ["Priority", "Status", "Rating", "Add date"];
const orderDirection = ["High -> Low", "Low -> High"];

function GameOrder(props) {
  const { orderBy, handleOrderBy, orderD, handleOrderD } = props;
  return (
    <>
      <FormControl
        style={{ width: "10%", backgroundColor: "white", marginRight: "1rem" }}
      >
        <InputLabel id="demo-simple-select-label">Order by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter by"
          value={orderBy}
          onChange={handleOrderBy}
        >
          <MenuItem value="nothing">Doesn't matter</MenuItem>
          {orderOptions.map((opt) => (
            <MenuItem value={opt} key={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {orderBy !== "nothing" && (
        <FormControl
          style={{
            width: "10%",
            backgroundColor: "white",
            marginRight: "1rem",
          }}
        >
          <InputLabel id="demo-simple-select-label">Direction</InputLabel>
          <Select
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
