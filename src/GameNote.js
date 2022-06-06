import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";

import deleteHelper from "./helpers/deleteHelper";

import useToggle from "./hooks/useToggle";
import useInput from "./hooks/useInput";

function GameNote(props) {
  const { fetchNotes, noteText, date, id } = props;
  const [edit, toggleEdit] = useToggle(false);
  const [editText, handleEditText, setEditText] = useInput("");
  const handleDelete = () => {
    //temporary solution I think? I just want to be able to call fetchNotes again
    deleteHelper("note", id);
    setTimeout(() => {
      fetchNotes();
    }, 500);
  };
  const handleEdit = () => {
    //editing logic here kekw

    toggleEdit();
    setEditText("");
  };

  return (
    <Card sx={{ minWidth: 275 }} style={{ marginBottom: "1rem" }}>
      {!edit ? (
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
              <IconButton
                size="small"
                style={{ paddingTop: "0px" }}
                onClick={toggleEdit}
              >
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
      ) : (
        <>
          <CardContent>
            <TextField
              value={editText}
              onChange={handleEditText}
              required
              multiline
              fullWidth
              placeholder="Note text"
              minRows={2}
              maxRows={6}
            ></TextField>
          </CardContent>

          <CardActions>
            <Button
              type="submit"
              style={{ marginLeft: "auto", marginRight: "auto" }}
              color="primary"
              variant="contained"
              onClick={handleEdit}
            >
              Submit edit
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}

export default GameNote;
