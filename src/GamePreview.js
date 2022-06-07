import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { starConversion, priorityConversion } from "./helpers/iconConversions";

function GamePreview(props) {
  const { title, image_source, status, priority, id } = props;
  return (
    <Grid item md={6} lg={4}>
      <Card>
        <div style={{ padding: ".5rem 1rem" }}>
          <Typography
            // gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{starConversion[status].value}</span>
              {title}
              <span>{priorityConversion[priority].value}</span>
            </div>
          </Typography>
          <Link to={`/games/${id}`}>
            <CardMedia
              component="img"
              height="90%"
              image={image_source}
              alt="image"
            />
          </Link>

          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            ></Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

export default GamePreview;
