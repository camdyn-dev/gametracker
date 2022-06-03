import React from "react";
import useInput from "./hooks/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function GameForm(props) {
  // const { games, setGames } = props;

  const [title, handleTitle] = useInput("");
  const [imgSrc, handleImgSrc] = useInput("");
  const [completed, handleCompleted] = useInput("no");

  console.log(completed, "re-render");

  const post = async () => {
    const res = await axios.post("http://localhost:3001/", {
      title,
      imgSrc,
      completed,
    });
    console.log(res);
  }; // not entirely sure, but making the forum function async doesn't play well with navigate

  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          post();
          navigate("/");
        }}
      >
        <h3>Game Information</h3>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitle} />
        <label htmlFor="imgSrc">Box art link:</label>
        <input type="text" id="imgSrc" value={imgSrc} onChange={handleImgSrc} />
        <div onChange={handleCompleted}>
          <h4>Have you completed the game?</h4>
          <label htmlFor="completedYes">Yes</label>
          <input type="radio" name="completed" value="yes" id="completedYes" />
          <br />
          <label htmlFor="completedPartial">Partially</label>
          <input
            type="radio"
            name="completed"
            value="partially"
            id="completedPartially"
          />
          <br />
          <label htmlFor="completedTrue">No</label>
          <input
            type="radio"
            value="no"
            name="completed"
            id="completedNo"
            defaultChecked
          />
        </div>
        <button type="submit">submit gaming</button>
      </form>
    </div>
  );
}

export default GameForm;
