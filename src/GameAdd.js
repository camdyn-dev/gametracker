import React from "react";
import useInput from "./hooks/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Paper, Button } from "@mui/material";

import GameForm from "./GameForm";

function GameAdd(props) {
  const [title, handleTitle] = useInput("");
  const [image_source, handleImage] = useInput("");
  const [status, handleStatus] = useInput("no");
  const [priority, handlePriority] = useInput(3);
  const [rating, handleRating] = useInput(null);

  const post = async () => {
    await axios.post("http://localhost:3001/", {
      title,
      image_source,
      status,
      priority,
      rating,
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
            setTimeout(() => {
              navigate("/games");
            }, 1000);
          }}
        >
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