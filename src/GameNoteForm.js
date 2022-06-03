import React, { useEffect } from "react";
import useInput from "./hooks/useInput";
import axios from "axios";

function GameNoteForm(props) {
  const { id } = props; //grabbing the game id
  const [noteText, handleNoteText] = useInput("");

  const post = async () => {
    const res = await axios.post(`http://localhost:3001/${id}`, {
      noteText,
      gameId: id,
    });
  };
  console.log("render");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          post();
        }}
      >
        <textarea
          value={noteText}
          onChange={handleNoteText}
          required
        ></textarea>
        <button type="submit">Add note</button>
      </form>
    </div>
  );
}

export default GameNoteForm;
