import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import GameNoteForm from "./GameNoteForm";
import GameNote from "./GameNote";
import GameEditForm from "./GameEditForm";
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
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import deleteHelper from "./helpers/deleteHelper";

import useToggle from "./hooks/useToggle";

function GameDetails() {
  const [game, setGame] = useState({});
  const [notes, setNotes] = useState([]);
  const [edit, toggleEdit] = useToggle(false);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleGameDelete = () => {
    deleteHelper("game", id);
    setTimeout(() => {
      navigate("/games");
    }, 500); //should really find a better way of doing this
  };

  return (
    <Container>
      <Grid container spacing={2} padding={2} marginTop={1}>
        <Grid item md={8}>
          {!edit ? (
            <Card style={{ padding: "1rem" }}>
              <Typography
                variant="h4"
                component="div"
                textAlign="center"
                style={{ position: "relative" }}
                gutterBottom
              >
                {game.title}
                <span
                  style={{
                    paddingTop: "0px",
                    position: "absolute",
                    right: "0%",
                  }}
                >
                  <IconButton
                    style={{ paddingTop: "inherit" }}
                    onClick={toggleEdit}
                  >
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton
                    style={{ paddingTop: "inherit" }}
                    onClick={handleGameDelete}
                  >
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </span>
              </Typography>
              <CardMedia
                component="img"
                image={game.imgSrc}
                width="90"
                alt="game cover"
              />
            </Card>
          ) : (
            <GameEditForm
              {...game}
              toggleEdit={toggleEdit}
              fetchGame={fetchGame}
            />
          )}
        </Grid>
        {/* the below centering will work for now, but it's not the greatest solution, that's for sure*/}
        <Grid item md={4} style={{ marginRight: "auto", marginLeft: "auto" }}>
          <Card
            style={{
              marginBottom: "1rem",
            }}
          >
            <CardContent style={{ padding: ".8rem 0" }}>
              <Typography variant="h6" textAlign="center">
                Notes:
              </Typography>
            </CardContent>
          </Card>
          {notes.map((note) => (
            <GameNote
              noteText={note.noteText}
              date={note.date}
              key={note.id}
              id={note.id}
              fetchNotes={fetchNotes}
            />
          ))}
          <GameNoteForm id={id} fetchNotes={fetchNotes} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default GameDetails;

//planning on doing something like notes for the game that I can use to track or review or whatever for it
