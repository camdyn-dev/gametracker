import React from "react";
import Game from "./Game";

function GameList(props) {
  const { games } = props;
  return games.map((game) => <Game {...game} />);
}

export default GameList;
