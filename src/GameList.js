import React from "react";
import { useEffect, useState } from "react";
import GamePreview from "./GamePreview";
import axios from "axios";
import { Container, Grid } from "@mui/material";

function GameList() {
  const [games, setGames] = useState([]);

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
      <Grid container spacing={2}>
        {games.map((game) => (
          <GamePreview {...game} key={game.id} />
        ))}
      </Grid>
    </Container>
  );
}

export default GameList;
