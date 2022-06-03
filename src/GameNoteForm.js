import React from "react";
import useInput from "./hooks/useInput";

function GameNoteForm() {
  const [note, handleNote] = useInput("");
  return (
    <div>
      <form>
        <textarea value={note} onChange={handleNote}></textarea>
        <button type="submit">Add note</button>
      </form>
    </div>
  );
}

export default GameNoteForm;
