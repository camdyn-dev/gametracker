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
  const [filter, handleFilter] = useInput("N/A");
  const [filterParam, handleFilterParam] = useInput(""); //switching bug with this,
  //gotta find out how to clear it when you change filter categories so it doesn't carry over into the next, i.e., switching to status from priority yet carrying "High"
  const [orderBy, handleOrderBy] = useInput("N/A");
  const [orderD, handleOrderD] = useInput("");
  //god this state looks disgusting
  //that's kind of a running theme for now, though. I'll need to work on re-factoring things

  //probably gonna rework it into [filter -> category], [filterParam -> catFilter], [orderBy - same], [orderD -> direction]

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:3001");
      setGames(data.data);
    };
    fetchData();
  }, []); //not exactly sure where to put this, also not 100% sure how to make this work exactly like componentDidMount

  const postFilter = async () => {
    const res = await axios.get("http://localhost:3001/filter/", {
      params: { filter, filterParam, orderBy, orderD },
    });
    setTimeout(() => {
      setGames(res.data);
    }, 500);
  };
  //the margin top is what's causing the top to be the color
  return (
    <Container style={{ marginTop: "1vh" }}>
      {/* would like to figure out how to conditionally justify content so everything is centered on the sm and below*/}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postFilter();
        }}
        style={{ margin: "1rem 0", display: "flex" }}
      >
        <GameFilter
          filter={filter}
          handleFilter={handleFilter}
          filterParam={filterParam}
          handleFilterParam={handleFilterParam}
          orderBy={orderBy}
        />
        <GameOrder
          orderBy={orderBy}
          handleOrderBy={handleOrderBy}
          orderD={orderD}
          handleOrderD={handleOrderD}
          filter={filter}
        />
        {(filter !== "N/A" || orderBy !== "N/A") && (
          <Button type="submit" variant="outlined">
            Filter
          </Button>
        )}
      </form>

      <Grid container spacing={2}>
        {games.map((game) => (
          <GamePreview {...game} key={game.id} />
        ))}
      </Grid>
    </Container>
  );
}

export default GameList;
