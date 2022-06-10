// will probably find a way to merge the new and edit form, passing a variable which determines how what works
import React, { memo } from "react";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { Container, Paper, Button } from "@mui/material";
import GameForm from "./GameForm";

function GameEdit(props) {
  const { toggleEdit, fetchGame } = props;
  const [title, handleTitle] = useInput(props.title);
  const [image_source, handleImage] = useInput(props.image_source);
  const [status, handleStatus] = useInput(props.status);
  const [priority, handlePriority] = useInput(props.priority);
  const [rating, handleRating] = useInput(props.rating);

  const put = async () => {
    let priorityCheck = priority;
    let ratingCheck = rating;
    {
      status == 3 || status == 0 ? (priorityCheck = 0) : (ratingCheck = 0);
    } //makes sure only one of them is true, mainly for sorting. same thing in GameAdd
    await axios.put(`http://localhost:3001/games/${props.id}`, {
      title,
      image_source,
      status,
      priority: priorityCheck,
      rating: ratingCheck,
    });
  }; // not entirely sure, but making the forum function async doesn't play well with navigate

  return (
    <Container maxWidth="md">
      <Paper elevation={2} style={{ marginTop: "1rem", padding: "1rem .5rem" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            put();
            setTimeout(() => {
              fetchGame();
              toggleEdit();
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
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="contained" type="submit" style={{ width: "45%" }}>
              Submit edit
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ width: "45%" }}
              onClick={toggleEdit}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
}

export default memo(GameEdit);
