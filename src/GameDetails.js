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
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import icons from "./helpers/iconConversions";

import deleteHelper from "./helpers/deleteHelper";

import useToggle from "./hooks/useToggle";
import "./App.css";

function GameDetails() {
  const [game, setGame] = useState({
    status: "Lightly/Unplayed",
    priority: "3",
  }); //setting with default val so the icon conversion works
  const [notes, setNotes] = useState([]);
  const [edit, toggleEdit] = useToggle(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { statusIcon, statusTitle } = icons.starIcons(game.status);
  const { priorityIcon, priorityTitle } = icons.priorityIcons(game.priority); //ez reusability

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
                gutterBottom
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  <span title={statusTitle}>
                    <IconButton disabled>{statusIcon}</IconButton>
                  </span>

                  <span title={priorityTitle}>
                    <IconButton disabled>{priorityIcon}</IconButton>
                  </span>

                  {/* use this to display how much I want to play something ig, might find another icon i dunno*/}
                </span>
                <span>{game.title}</span>

                <span>
                  <IconButton onClick={toggleEdit}>
                    <Tooltip title="Edit post">
                      <EditIcon></EditIcon>
                    </Tooltip>
                  </IconButton>

                  <IconButton onClick={handleGameDelete}>
                    <Tooltip title="Delete post">
                      <DeleteIcon></DeleteIcon>
                    </Tooltip>
                  </IconButton>
                </span>
              </Typography>
              <CardMedia
                component="img"
                image={game.image_source}
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
            <GameNote {...note} key={note.id} fetchNotes={fetchNotes} />
          ))}
          <GameNoteForm id={id} fetchNotes={fetchNotes} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default GameDetails;

//planning on doing something like notes for the game that I can use to track or review or whatever for it
