import React from "react";
import useInput from "./hooks/useInput";
import { useNavigate } from "react-router-dom";
function GameForm(props) {
  const { games, setGames } = props;

  const [title, handleTitle] = useInput("");
  const [imgSrc, handleImgSrc] = useInput("");

  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setGames([...games, { title, imgSrc }]);
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
