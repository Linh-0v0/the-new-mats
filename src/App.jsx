import { Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/Themes";

import { AnimatePresence } from "framer-motion";
import { lazy } from "react";
// import CatEating from "./pages/CatEating";
// import CatPlaying from "./pages/CatPlaying";
// import CatStanding from "./pages/CatStanding";
// import CatLying from "./pages/CatLying";
// import CatSideLying from "./pages/CatSideLying";
// import GameMap from "./pages/GameMap";
// import Home from "./pages/Home";

const Home = lazy(() => import("./pages/Home"))
const CatEating = lazy(() => import("./pages/CatEating"))
const CatPlaying = lazy(() => import("./pages/CatPlaying"))
const CatStanding = lazy(() => import("./pages/CatStanding"))
const CatLying = lazy(() => import("./pages/CatLying"))
const CatSideLying = lazy(() => import("./pages/CatSideLying"))
const GameMap = lazy(() => import("./pages/GameMap"))

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/scene/cat-eating" element={<CatEating />} />
            <Route path="/scene/cat-playing" element={<CatPlaying />} />
            <Route path="/scene/cat-standing" element={<CatStanding />} />
            <Route path="/scene/cat-lying" element={<CatLying />} />
            <Route path="/scene/cat-side-lying" element={<CatSideLying />} />
            <Route path="/scene/town" element={<GameMap />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
