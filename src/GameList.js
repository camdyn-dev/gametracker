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

  return (
    <Container>
      <Grid container spacing={2}>
        {games.map((game) => (
          <GamePreview {...game} key={game.id} />
        ))}
      </Grid>
    </Container>
  );
}

export default GameList;
