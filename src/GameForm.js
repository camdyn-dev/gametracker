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
function GameForm(props) {
  // const { games, setGames } = props;

  const [title, handleTitle] = useInput("");
  const [imgSrc, handleImgSrc] = useInput("");
  const [completed, handleCompleted] = useInput("no");

  console.log(completed, "re-render");

  const post = async () => {
    await axios.post("http://localhost:3001/", {
      title,
      imgSrc,
      completed,
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
          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>
          {/* <button type="submit">submit gaming</button> */}
        </form>
      </Paper>
    </Container>
  );
}

export default GameForm;
