import { Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/Themes";

import { AnimatePresence } from "framer-motion";
import CatEating from "./pages/CatEating";
import CatPlaying from "./pages/CatPlaying";
import CatStanding from "./pages/CatStanding";
import CatLying from "./pages/CatLying";
import CatSideLying from "./pages/CatSideLying";
import Home from "./pages/Home";

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
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
