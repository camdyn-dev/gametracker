import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

function GamePreview(props) {
  const { title, image_source, status, id } = props;
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
            {title}
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
            >
              Completion status: {status}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

export default GamePreview;
