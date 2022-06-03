import "./App.css";
import { useState } from "react";
import GameList from "./GameList";
import { Routes, Route } from "react-router-dom";
import GameForm from "./GameForm";

function App() {
  const [games, setGames] = useState([
    {
      title: "Shin Megami Tensei V",
      imgSrc: "https://art.gametdb.com/switch/box/US/AM7NC.png?1642196995",
    },
  ]);
  return (
    <Routes>
      <Route path="/" element={<GameList games={games} />} />
      <Route
        path="/addGame"
        element={<GameForm games={games} setGames={setGames} />}
      />
    </Routes>
  );
}

export default App;

//at it's basics, it's just gonna track what games I've played, am playing and want to play (sort of like myanimelist)
//however, I could be biggus diccus maximus and make it an app that anyone can use, kinda like myanimelist
//probably will do the first first then the second second
