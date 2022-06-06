import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GameNoteForm from "./GameNoteForm";
import GameNote from "./GameNote";
import {
  Grid,
  Container,
  List,
  ListSubheader,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

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
      {/* <Paper elevation={2} style={{}}> */}
      <Grid container spacing={2} padding={2} marginTop={1}>
        <Grid item md={8}>
          <Card style={{ padding: "1rem" }}>
            <Typography variant="h4" component="div" textAlign="center">
              {game.title}
            </Typography>
            <CardMedia
              component="img"
              image={game.imgSrc}
              width="90"
              alt="game cover"
            />
          </Card>
        </Grid>
        <Grid item md={4}>
          {/* <List>
            <ListSubheader component="h1">Notes</ListSubheader> */}
          <Card style={{ marginBottom: "1rem" }}>
            <CardContent style={{ padding: ".8rem 0" }}>
              <Typography variant="h6" textAlign="center">
                Notes:
              </Typography>
            </CardContent>
          </Card>
          {notes.map((note) => (
            <GameNote noteText={note.noteText} date={note.date} key={note.id} />
          ))}
          <GameNoteForm id={id} fetchNotes={fetchNotes} />
          {/* </List> */}
        </Grid>
      </Grid>
      {/* </Paper> */}
    </Container>
  );
}

export default GameDetails;

//planning on doing something like notes for the game that I can use to track or review or whatever for it
