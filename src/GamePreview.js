import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

function GamePreview(props) {
  const { title, imgSrc, id, completed } = props;
  return (
    <Grid item sm={6} lg={4}>
      <h2>{title}</h2>
      <div>
        <Link to={`/games/${id}`}>
          <img
            src={imgSrc}
            alt="game"
            style={{ width: "90%", height: "90%" }}
          />
        </Link>
      </div>

      <h4>Completed? : {completed}</h4>
    </Grid>
  );
}

export default GamePreview;
