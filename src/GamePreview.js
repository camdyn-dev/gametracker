import React from "react";
import { Link } from "react-router-dom";

function GamePreview(props) {
  const { title, imgSrc, id } = props;
  return (
    <div>
      <h2>{title}</h2>
      <Link to={`/games/${id}`}>
        <img src={imgSrc} alt="game" />
      </Link>
    </div>
  );
}

export default GamePreview;
