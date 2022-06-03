import "./App.css";

import GameList from "./GameList";
import { Routes, Route } from "react-router-dom";
import GameForm from "./GameForm";
import GameDetails from "./GameDetails";

function App() {
  return (
    <Routes>
      <Route path="/games" element={<GameList />} />
      <Route path="/games/:id" element={<GameDetails />} />
      <Route path="/addGame" element={<GameForm />} />
    </Routes>
  );
}

export default App;

//at it's basics, it's just gonna track what games I've played, am playing and want to play (sort of like myanimelist)
//however, I could be biggus diccus maximus and make it an app that anyone can use, kinda like myanimelist
//probably will do the first first then the second second
