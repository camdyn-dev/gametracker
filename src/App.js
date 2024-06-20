import "./App.css";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import GameList from "./Components/Reading/GameList";
import { Routes, Route } from "react-router-dom";
import GameAdd from "./Components/Create&Update/GameAdd";
import GameDetails from "./Components/Reading/GameDetails";
import Navbar from "./Navbar";
import useToggle from "./hooks/useToggle";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const [theme, toggleTheme] = useToggle(true);

  const darkTheme = createTheme({
    palette: {
      mode: theme === true ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <div className="App">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/games" element={<GameList />} />
            <Route path="/games/:id" element={<GameDetails />} />
            <Route path="/addGame" element={<GameAdd />} />
          </Routes>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

//at it's basics, it's just gonna track what games I've played, am playing and want to play (sort of like myanimelist)
//probably will do the first first then the second second
