import React from "react";
import { useEffect, useState } from "react";
import GamePreview from "./GamePreview";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import useInput from "./hooks/useInput";
import { Button } from "@mui/material";

import GameFilter from "./Filtering/GameFilter";
import GameOrder from "./Filtering/GameOrder";
//A popular one will probably be
//WHERE priority BETWEEN 4 AND 5 ORDER BY priority DESC;

function GameList() {
  const [games, setGames] = useState([]);
  const [filter, handleFilter] = useInput("nothing");
  const [filterParams, handleFilterParams] = useInput("");
  const [orderBy, handleOrderBy] = useInput("nothing");
  const [orderD, handleOrderD] = useInput("High -> Low");
  //god this state looks disgusting
  //that's kind of a running theme for now, though. I'll need to work on re-factoring things

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:3001");
      setGames(data.data);
    };
    fetchData();
  }, []); //not exactly sure where to put this, also not 100% sure how to make this work exactly like componentDidMount

  const postFilter = async () => {
    const res = await axios.get("http://localhost:3001/filter/", {
      params: { filterBy: filter, param: filterParams },
    });
    setTimeout(() => {
      setGames(res.data);
    }, 500);
  };
  //the margin top is what's causing the top to be the color
  return (
    <Container style={{ marginTop: "1vh" }}>
      {/* would like to figure out how to conditionally justify content so everything is centered on the sm and below*/}
      <div style={{ margin: "1rem 0" }}>
        <GameFilter
          filter={filter}
          handleFilter={handleFilter}
          filterParams={filterParams}
          handleFilterParams={handleFilterParams}
        />
        <GameOrder
          orderBy={orderBy}
          handleOrderBy={handleOrderBy}
          orderD={orderD}
          handleOrderD={handleOrderD}
        />
        <Button onClick={postFilter}>Filter</Button>
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
