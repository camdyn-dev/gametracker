import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function GameNote(props) {
  const { noteText, date } = props;
  return (
    <Card sx={{ minWidth: 275 }} style={{ marginBottom: "1rem" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Posted on {date}
        </Typography>
        <Typography variant="body1">{noteText}</Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default GameNote;
