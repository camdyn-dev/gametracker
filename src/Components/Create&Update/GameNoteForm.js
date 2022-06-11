import React from "react";
import useInput from "../../hooks/useInput";
import axios from "axios";
import {
  TextField,
  Button,
  Paper,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import { immTimeout } from "../../helpers/timeoutHelper";

function GameNoteForm(props) {
  const { id, fetchNotes } = props; //grabbing the game id
  const [note, handleNote, setNote, reset] = useInput("");
  const post = async () => {
    try {
      await axios.post(`http://localhost:3001/notes/${id}`, {
        note,
        game_id: id,
      });
    } catch (e) {
      console.log(e);
    }
  };
  //should add res and do something with it, but this works fine for now

  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          post();
          immTimeout(fetchNotes, false, reset);
        }}
      >
        <CardContent>
          <TextField
            value={note}
            onChange={handleNote}
            required
            multiline
            fullWidth
            placeholder="Note text"
            minRows={4}
            maxRows={8}
          ></TextField>
        </CardContent>

        <CardActions>
          <Button
            type="submit"
            style={{ marginLeft: "auto", marginRight: "auto" }}
            color="primary"
            variant="contained"
          >
            Add note
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}

export default GameNoteForm;
