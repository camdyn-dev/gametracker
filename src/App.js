import "./App.css";

import GameList from "./GameList";
import { Routes, Route } from "react-router-dom";
import GameForm from "./GameForm";
import GameEditForm from "./GameEditForm";
import GameDetails from "./GameDetails";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/games" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/addGame" element={<GameForm />} />
        <Route path="/editGame/:id" element={<GameEditForm />} />
      </Routes>
    </div>
  );
}

export default App;

//at it's basics, it's just gonna track what games I've played, am playing and want to play (sort of like myanimelist)
//however, I could be biggus diccus maximus and make it an app that anyone can use, kinda like myanimelist
//probably will do the first first then the second second
