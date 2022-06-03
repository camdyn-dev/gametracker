import "./App.css";
import GameList from "./GameList";
const games = [
  {
    title: "Shin Megami Tensei V",
    imgSrc: "https://art.gametdb.com/switch/box/US/AM7NC.png?1642196995",
  },
];
function App() {
  return (
    <div className="App">
      <GameList games={games} />
    </div>
  );
}

export default App;

//at it's basics, it's just gonna track what games I've played, am playing and want to play (sort of like myanimelist)
//however, I could be biggus diccus maximus and make it an app that anyone can use, kinda like myanimelist
//probably will do the first first then the second second
