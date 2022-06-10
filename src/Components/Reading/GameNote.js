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

import fetchHelper from "../../helpers/fetchHelper";
import deleteHelper from "../../helpers/deleteHelper";
import editHelper from "../../helpers/editHelper";

import useToggle from "../../hooks/useToggle";
import useInput from "../../hooks/useInput";

function GameNote(props) {
  const { note, post_date, id, fetchNotes } = props;
  const [edit, toggleEdit] = useToggle(false);
  const [editText, handleEditText, reset] = useInput(note);
  const handleDelete = () => {
    //temporary solution I think? I just want to be able to call fetchNotes again
    deleteHelper("note", id);
    setTimeout(() => {
      fetchNotes();
    }, 500);
  };
  const handleEdit = () => {
    editHelper("note", id, { note: editText });
    setTimeout(() => {
      fetchNotes();
      toggleEdit();
    }, 500); //this is a bad idea, but it'll work for now. should put a timeout where it's rendering a loading circle
  };

  return (
    <Card sx={{ minWidth: 275 }} style={{ marginBottom: "1rem" }}>
      {!edit ? (
        <CardContent>
          <div className="between">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              component="span"
              gutterBottom
            >
              Posted on {post_date}
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

          <Typography variant="body1">{note}</Typography>
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
              color="primary"
              variant="contained"
              onClick={handleEdit}
            >
              Submit edit
            </Button>
            <Button color="error" variant="contained" onClick={toggleEdit}>
              Cancel edit
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}

export default GameNote;
