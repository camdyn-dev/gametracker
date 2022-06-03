import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GameNoteForm from "./GameNoteForm";

function GameDetails() {
  const [game, setGame] = useState({});
  const [notes, setNotes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    //only runs once to fetch stuff. annoying thing currently is that it doesn't auto update
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3001/${id}`);
      const res2 = await axios.get(`http://localhost:3001/notes/${id}`);
      setGame(res.data[0]);
      setNotes(res2.data);
    };
    fetchData();
  }, []); //man I hate the way prettier formats this syntax

  return (
    <div className="GameDetails">
      <h1>{game.title}</h1>
      <div>
        <img src={game.imgSrc} alt="" />
        <span>{game.completed}</span>
      </div>
      <GameNoteForm id={id} />
      <div>
        {notes.map((note) => (
          <h3 key={note.id}>{note.noteText}</h3>
        ))}
      </div>
    </div>
  );
}

export default GameDetails;

//planning on doing something like notes for the game that I can use to track or review or whatever for it
