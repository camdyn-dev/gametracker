import { memo } from "react";
import {
  convertStatus,
  convertPriority,
  convertRating,
} from "./helpers/conversionTable";

import {
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const typographyMargin = {
  marginBottom: ".5rem",
};
function GameForm(props) {
  const {
    title,
    handleTitle,
    image_source,
    handleImage,
    status,
    handleStatus,
    priority,
    handlePriority,
    rating,
    handleRating,
  } = props;
  return (
    <>
      <Typography variant="h5" textAlign={"center"} style={typographyMargin}>
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
      {status != 3 ? (
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
            <FormLabel style={{ textAlign: "center" }}>How was it?</FormLabel>
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
              <FormControlLabel
                value="0"
                name="rating"
                control={<Radio />}
                label={convertRating[0]}
              />
            </RadioGroup>
          </FormControl>
        </div>
      )}
    </>
  );
}

export default memo(GameForm);
