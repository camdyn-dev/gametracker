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
  const [imgSrc, handleImgSrc] = useInput(props.imgSrc);
  const [completed, handleCompleted] = useInput(props.completed);

  const put = async () => {
    await axios.put(`http://localhost:3001/games/${props.id}`, {
      title,
      imgSrc,
      completed,
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
            value={imgSrc}
            onChange={handleImgSrc}
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
              <FormLabel>Completion Status</FormLabel>
              {/* completion status box, will refactor styles eventually with good names */}
              <RadioGroup value={completed} onChange={handleCompleted} row>
                <FormControlLabel
                  value="yes"
                  name="completed"
                  control={<Radio />}
                  label="yes"
                />
                <FormControlLabel
                  value="partially"
                  name="completed"
                  control={<Radio />}
                  label="partially"
                />
                <FormControlLabel
                  value="no"
                  name="completed"
                  control={<Radio />}
                  label="no"
                />
              </RadioGroup>
            </FormControl>
          </div>
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
