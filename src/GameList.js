import React from "react";
import { useEffect, useState } from "react";
import Game from "./Game";
import axios from "axios";

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:3001");
      setGames(data.data);
    };
    fetchData();
  }, []); //not exactly sure where to put this, also not 100% sure how to make this work exactly like componentDidMount

  return games.map((game) => <Game {...game} />);
}

export default GameList;
