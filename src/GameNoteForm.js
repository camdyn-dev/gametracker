import React from "react";
import useInput from "./hooks/useInput";
import axios from "axios";
import {
  TextField,
  Button,
  Paper,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";

function GameNoteForm(props) {
  const { id, fetchNotes } = props; //grabbing the game id
  const [noteText, handleNoteText, reset] = useInput("");
  const post = async () => {
    try {
      await axios.post(`http://localhost:3001/${id}`, {
        noteText,
        gameId: id,
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
          reset();
          // I do not know why the fuck the following works, but I have been trying to make it dynamically update after posting a comment for over an HOUR
          // and I will not question this
          setTimeout(() => {
            fetchNotes();
          }, 500);
          //what I'd have to GUESS is that the callback allows it to run after it's been sent to the server? nonetheless, it kinda works currently, but I'll
          //have to adjust the timeout for production AND add a loading circle so it doesn't look whack while it's re-fetching

          //the above comment looks kinda stupid now, but that's because I was originally using a 1 milisecond timeout
        }}
      >
        <CardContent>
          <TextField
            value={noteText}
            onChange={handleNoteText}
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
