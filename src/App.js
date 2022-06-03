import "./App.css";
import { useEffect, useState } from "react";
import GameList from "./GameList";
import { Routes, Route } from "react-router-dom";
import GameForm from "./GameForm";
import axios from "axios";

function App() {
  const [games, setGames] = useState([
    // {
    //   title: "Shin Megami Tensei V",
    //   imgSrc: "https://art.gametdb.com/switch/box/US/AM7NC.png?1642196995",
    // },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:3001");
      setGames(data.data);
    };
    fetchData();
  }); //not exactly sure where to put this, also not 100% sure how to make this work exactly like componentDidMount

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
