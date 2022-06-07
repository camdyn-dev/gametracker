// will probably find a way to merge the new and edit form, passing a variable which determines how what works
import React, { useEffect } from "react";
import useInput from "./hooks/useInput";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Paper,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";

function GameEditForm(props) {
  const { toggleEdit, fetchGame } = props;
  const [title, handleTitle] = useInput(props.title);
  const [image_source, handleImage] = useInput(props.image_source);
  const [status, handleStatus] = useInput(props.status);
  const [priority, handlePriority] = useInput(props.priority);
  const [rating, handleRating] = useInput(props.rating);

  const put = async () => {
    await axios.put(`http://localhost:3001/games/${props.id}`, {
      title,
      image_source,
      status,
      priority,
      rating,
    });
  }; // not entirely sure, but making the forum function async doesn't play well with navigate

  const typographyMargin = {
    marginBottom: ".5rem",
  };

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
          <Typography
            variant="h5"
            textAlign={"center"}
            style={typographyMargin}
          >
            Game Information
          </Typography>

          <TextField
            required
            label="Title"
            value={title}
            onChange={handleTitle}
            fullWidth
            style={typographyMargin}
          />
          <TextField
            required
            label="Box art"
            value={image_source}
            onChange={handleImage}
            fullWidth
            style={typographyMargin}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem 0",
            }}
          >
            <FormControl>
              <FormLabel style={{ textAlign: "center" }}>
                Completion Status
              </FormLabel>
              {/* completion status box, will refactor styles eventually with good names */}
              <RadioGroup value={status} onChange={handleStatus} row>
                <FormControlLabel
                  value="Completed"
                  name="status"
                  control={<Radio />}
                  label="Completed"
                />
                <FormControlLabel
                  value="In Progress"
                  name="status"
                  control={<Radio />}
                  label="In Progress"
                />
                <FormControlLabel
                  value="Lightly/Unplayed"
                  name="status"
                  control={<Radio />}
                  label="Lightly/Unplayed"
                />
              </RadioGroup>
            </FormControl>
          </div>
          {status !== "Completed" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "1rem 0",
              }}
            >
              <FormControl>
                <FormLabel style={{ textAlign: "center" }}>
                  How bad do you want to play/finish it?
                </FormLabel>
                {/* completion status box, will refactor styles eventually with good names */}
                <RadioGroup value={priority} onChange={handlePriority} row>
                  <FormControlLabel
                    value="5"
                    name="play_priority"
                    control={<Radio />}
                    label="NOW"
                  />
                  <FormControlLabel
                    value="4"
                    name="play_priority"
                    control={<Radio />}
                    label="Very soon"
                  />
                  <FormControlLabel
                    value="3"
                    name="play_priority"
                    control={<Radio />}
                    label="Sometime soon"
                  />
                  <FormControlLabel
                    value="2"
                    name="play_priority"
                    control={<Radio />}
                    label="Eventually"
                  />
                  <FormControlLabel
                    value="1"
                    name="play_priority"
                    control={<Radio />}
                    label="Dunno"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "1rem 0",
              }}
            >
              <FormControl>
                <FormLabel style={{ textAlign: "center" }}>
                  How was it?
                </FormLabel>
                {/* completion status box, will refactor styles eventually with good names */}
                <RadioGroup value={rating} onChange={handleRating} row>
                  <FormControlLabel
                    value="Fantastic"
                    name="rating"
                    control={<Radio />}
                    label="Fantastic"
                  />
                  <FormControlLabel
                    value="Worth it"
                    name="rating"
                    control={<Radio />}
                    label="Worth it"
                  />
                  <FormControlLabel
                    value="Meh"
                    name="rating"
                    control={<Radio />}
                    label="Meh"
                  />
                  <FormControlLabel
                    value="Not worth it"
                    name="rating"
                    control={<Radio />}
                    label="Not worth it"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          )}
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

export default GameEditForm;
