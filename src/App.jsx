import { Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/Themes";

import { AnimatePresence } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Landing from "./sections/Landing";
import Service from "./sections/Service";
import LandingMain from "./sections/LandingMain";
import CatEating from "./pages/CatEating";
import CatPlaying from "./pages/CatPlaying";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scene/cat-eating" element={<CatEating />} />
            <Route path="/scene/cat-playing" element={<CatPlaying />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
