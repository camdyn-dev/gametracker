import React from "react";
import useInput from "./hooks/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function GameForm(props) {
  // const { games, setGames } = props;

  const [title, handleTitle] = useInput("");
  const [imgSrc, handleImgSrc] = useInput("");

  const post = async () => {
    const res = await axios.post("http://localhost:3001/", {
      title,
      imgSrc,
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
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={handleTitle} />
        <input type="text" value={imgSrc} onChange={handleImgSrc} />
        <button type="submit">submit gaming</button>
      </form>
    </div>
  );
}

export default GameForm;
