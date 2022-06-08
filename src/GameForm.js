import React from "react";
import useInput from "./hooks/useInput";
import { useNavigate } from "react-router-dom";
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

import {
  convertStatus,
  convertPriority,
  convertRating,
} from "./helpers/conversionTable";

function GameForm(props) {
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

  const typographyMargin = {
    marginBottom: ".5rem",
  };

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
                  value="3"
                  name="status"
                  control={<Radio />}
                  label={convertStatus[3]}
                />
                <FormControlLabel
                  value="2"
                  name="status"
                  control={<Radio />}
                  label={convertStatus[2]}
                />
                <FormControlLabel
                  value="1"
                  name="status"
                  control={<Radio />}
                  label={convertStatus[1]}
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
                    label={convertPriority[5]}
                  />
                  <FormControlLabel
                    value="4"
                    name="play_priority"
                    control={<Radio />}
                    label={convertPriority[4]}
                  />
                  <FormControlLabel
                    value="3"
                    name="play_priority"
                    control={<Radio />}
                    label={convertPriority[3]}
                  />
                  <FormControlLabel
                    value="2"
                    name="play_priority"
                    control={<Radio />}
                    label={convertPriority[2]}
                  />
                  <FormControlLabel
                    value="1"
                    name="play_priority"
                    control={<Radio />}
                    label={convertPriority[1]}
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
                    value="4"
                    name="rating"
                    control={<Radio />}
                    label={convertRating[4]}
                  />
                  <FormControlLabel
                    value="3"
                    name="rating"
                    control={<Radio />}
                    label={convertRating[3]}
                  />
                  <FormControlLabel
                    value="2"
                    name="rating"
                    control={<Radio />}
                    label={convertRating[2]}
                  />
                  <FormControlLabel
                    value="1"
                    name="rating"
                    control={<Radio />}
                    label={convertRating[1]}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          )}

          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default GameForm;
