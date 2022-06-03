import React from "react";

function Game(props) {
  const { title, imgSrc } = props;
  return (
    <div>
      <h2>{title}</h2>
      <img src={imgSrc} alt="game image" />
    </div>
  );
}

export default Game;
