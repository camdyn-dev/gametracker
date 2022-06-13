import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import GameNoteForm from "../Create&Update/GameNoteForm";
import GameNote from "./GameNote";
import GameEdit from "../Create&Update/GameEdit";
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

import icons from "../../helpers/iconConversions";

import deleteHelper from "../../helpers/deleteHelper";

import useToggle from "../../hooks/useToggle";
import useWidth from "../../hooks/useWidth";
import { immTimeout } from "../../helpers/timeoutHelper";

function GameDetails() {
  const [game, setGame] = useState({
    status: "2",
    priority: "3",
    rating: "2",
  }); //setting with default val so the icon conversion works
  const [notes, setNotes] = useState([]);
  const [edit, toggleEdit] = useToggle(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { statusIcon, statusTitle } = icons.starIcons(game.status);
  const { priorityIcon, priorityTitle } = icons.priorityIcons(game.priority); //ez reusability
  const { ratingIcon, ratingTitle } = icons.ratingIcons(game.rating);

  const fetchGame = async () => {
    const res = await axios.get(`http://localhost:3001/games/${id}`);
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
    immTimeout(navigate, "/games");
  };

  //breakpoint stuff, makes text go in the middle when sizes are larger, above when smaller
  const width = useWidth();
  const titlePos = (
    <Typography variant="h5" component="div" textAlign="center">
      {game.title}
    </Typography>
  );

  return (
    <Container>
      <Grid container spacing={2} padding={2} marginTop={1}>
        <Grid item md={8}>
          {!edit ? (
            <Card style={{ padding: "1rem" }}>
              <Grid>
                <Grid item xs={12}></Grid>
                {(width === "xs" || width === "sm" || width === "md") &&
                  titlePos}
                <Grid
                  item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    <span title={statusTitle}>
                      <IconButton disabled>{statusIcon}</IconButton>
                    </span>

                    {game.status === 3 || game.status === 0 ? (
                      <span title={ratingTitle}>
                        <IconButton disabled>{ratingIcon}</IconButton>
                      </span>
                    ) : (
                      <span title={priorityTitle}>
                        <IconButton disabled>{priorityIcon}</IconButton>
                      </span>
                    )}
                  </span>

                  {(width === "lg" || width === "xl") && titlePos}

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
                </Grid>
              </Grid>
              <CardMedia
                component="img"
                image={game.image_source}
                width="90"
                alt="game cover"
              />
            </Card>
          ) : (
            <GameEdit {...game} toggleEdit={toggleEdit} fetchGame={fetchGame} />
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
