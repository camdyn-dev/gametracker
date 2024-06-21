import React from "react";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Paper, Button } from "@mui/material";
import { immTimeout } from "../../helpers/timeoutHelper";
import GameForm from "./GameForm";

function GameAdd() {
  const [title, handleTitle] = useInput("");
  const [image_source, handleImage] = useInput("");
  const [status, handleStatus] = useInput("1");
  const [priority, handlePriority] = useInput("3");
  const [rating, handleRating] = useInput("0");

  const post = async () => {
    let priorityCheck = priority;
    let ratingCheck = rating;

    // Is the game either completed, or dropped? If so, set the priority to zero. Otherwise, set the rating to zero
    status == 3 || status == 0 ? (priorityCheck = 0) : (ratingCheck = 0); 
    
    //annoyingly, setting it in the state doesn't work
    await axios.post("http://localhost:3001/games/", {
      title,
      image_source,
      status,
      priority: priorityCheck,
      rating: ratingCheck,
    });
  }; // not entirely sure, but making the forum function async doesn't play well with navigate

  const navigate = useNavigate();
  return (
    <Container maxWidth="md">
      <Paper elevation={2} style={{ marginTop: "1rem", padding: "1rem .5rem" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            post();
            immTimeout(navigate, "/games");
          }}
        >
          {/* Pass everything into the GameForm*/}
          <GameForm
            title={title}
            handleTitle={handleTitle}
            image_source={image_source}
            handleImage={handleImage}
            status={status}
            handleStatus={handleStatus}
            priority={priority}
            handlePriority={handlePriority}
            rating={rating}
            handleRating={handleRating}
          />
          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default GameAdd;
