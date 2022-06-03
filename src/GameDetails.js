import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GameNoteForm from "./GameNoteForm";

function GameDetails() {
  const [game, setGame] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3001/${id}`);
      setGame(res.data[0]);
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
      <GameNoteForm />
    </div>
  );
}

export default GameDetails;

//planning on doing something like notes for the game that I can use to track or review or whatever for it
