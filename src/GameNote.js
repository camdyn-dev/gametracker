import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import deleteHelper from "./helpers/deleteHelper";

function GameNote(props) {
  const { fetchNotes } = props;
  const handleDelete = () => {
    //temporary solution I think? I just want to be able to call fetchNotes again
    deleteHelper("note", id);
    setTimeout(() => {
      fetchNotes();
    }, 500);
  };
  const { noteText, date, id } = props;
  return (
    <Card sx={{ minWidth: 275 }} style={{ marginBottom: "1rem" }}>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            component="span"
            gutterBottom
          >
            Posted on {date}
          </Typography>
          <span style={{ paddingTop: "0px" }}>
            <IconButton size="small" style={{ paddingTop: "0px" }}>
              <EditIcon fontSize="inherit"></EditIcon>
            </IconButton>
            <IconButton
              size="small"
              style={{ paddingTop: "0px" }}
              onClick={handleDelete}
            >
              <DeleteIcon fontSize="inherit"></DeleteIcon>
            </IconButton>
          </span>
        </div>

        <Typography variant="body1">{noteText}</Typography>
      </CardContent>
    </Card>
  );
}

export default GameNote;
