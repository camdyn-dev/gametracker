import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GameNoteForm from "./GameNoteForm";
import { Grid, Container } from "@mui/material";

function GameDetails() {
  const [game, setGame] = useState({});
  const [notes, setNotes] = useState([]);
  const { id } = useParams();

  const fetchGame = async () => {
    const res = await axios.get(`http://localhost:3001/${id}`);
    setGame(res.data[0]);
  };
  const fetchNotes = async () => {
    const res2 = await axios.get(`http://localhost:3001/notes/${id}`);
    setNotes(res2.data);
  };

  useEffect(() => {
    //only runs once to fetch stuff. annoying thing currently is that it doesn't auto update
    fetchGame();
    fetchNotes();
  }, []); //man I hate the way prettier formats this syntax
  //so, I think I want this initial call to stay here, it's fine, but what I want to ultimately do is have another function
  //that does the res2 part that I pass down to GameNoteForm and it's called upon submit, so it re-renders the form

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>Shin Megami Tensei V</h1>
          <div>
            <img
              src={game.imgSrc}
              style={{ width: "90%", height: "90%" }}
              alt=""
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <h1>Notes</h1>
          {notes.map((note) => (
            <h3 key={note.id}>{note.noteText}</h3>
          ))}
        </Grid>
      </Grid>

      <GameNoteForm id={id} />
    </Container>
  );
}

export default GameDetails;

//planning on doing something like notes for the game that I can use to track or review or whatever for it
