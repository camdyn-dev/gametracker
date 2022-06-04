import React from "react";
import useInput from "./hooks/useInput";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Paper,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";

function GameNoteForm(props) {
  const { id } = props; //grabbing the game id
  const [noteText, handleNoteText, setNoteText] = useInput("");
  const navigate = useNavigate();
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
          setNoteText("");
        }}
      >
        <CardContent>
          {" "}
          <TextField
            value={noteText}
            onChange={handleNoteText}
            required
            multiline
            fullWidth
            placeholder="Note text"
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
