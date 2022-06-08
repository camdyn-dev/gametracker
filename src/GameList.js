import React from "react";
import { useEffect, useState } from "react";
import GamePreview from "./GamePreview";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import useInput from "./hooks/useInput";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

//filtering ideas
// WHERE priority BETWEEN 4 AND 5 -- high priority games
// WHERE priority BETWEEN 2 AND 3 -- medium priority
// WHERE priority = 1 -- lol never gonna play
// WHERE status = "Completed"
// WHERE status = "In Progress" -- games that I am playing
// WHERE status = "Lightly/Unplayed"
// ORDER BY priority DESC -- highest wants first
// ORDER BY rating

//A popular one will probably be
//WHERE priority BETWEEN 4 AND 5 ORDER BY priority DESC;

const filterConversions = {
  priority: {
    "High priority": "WHERE priority BETWEEN 4 AND 5",
    "Medium priority": "WHERE priority BETWEEN 2 AND 3",
    "Low priority": "WHERE priority = 1",
  },
  status: {
    Completed: 'WHERE status = "Completed"',
    "In Progress": 'WHERE status = "In Progress"',
    "Lightly/Unplayed": 'WHERE status = "Lightly/Unplayed"',
  },
};

function GameList() {
  const [games, setGames] = useState([]);
  const [filter, handleFilter] = useInput("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:3001");
      setGames(data.data);
    };
    fetchData();
  }, []); //not exactly sure where to put this, also not 100% sure how to make this work exactly like componentDidMount

  //the margin top is what's causing the top to be the color
  return (
    <Container style={{ marginTop: "1vh" }}>
      {/* would like to figure out how to conditionally justify content so everything is centered on the sm and below*/}
      <div style={{ margin: "1rem 0" }}>
        <FormControl style={{ width: "10%" }}>
          <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Filter by"
            onChange={handleFilter}
          >
            <MenuItem default value="Nothing">
              Nothing
            </MenuItem>
            <MenuItem value="priority">Priority</MenuItem>
            <MenuItem value="status">Completion status</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Grid container spacing={2}>
        {games.map((game) => (
          <GamePreview {...game} key={game.id} />
        ))}
      </Grid>
    </Container>
  );
}

export default GameList;
