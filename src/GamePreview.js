import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import icons from "./helpers/iconConversions";

function GamePreview(props) {
  const { title, image_source, status, priority, id } = props;
  const { statusIcon, statusTitle } = icons.starIcons(status);
  const { priorityIcon, priorityTitle } = icons.priorityIcons(priority); //ez reusability

  return (
    <Grid item md={6} lg={4}>
      <Card style={{ paddingBottom: ".5rem", paddingTop: ".5rem" }}>
        <div style={{ padding: ".5rem 1rem" }}>
          <Typography
            // gutterBottom
            variant="h6"
            component="div"
            textAlign="center"
            gutterBottom
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span title={statusTitle}>{statusIcon}</span>
              {title}
              <span title={priorityTitle}>{priorityIcon}</span>
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

          {/* <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            ></Typography>
          </CardContent> */}
          {/* dunno if I'll want to use this for anything*/}
        </div>
      </Card>
    </Grid>
  );
}

export default GamePreview;
