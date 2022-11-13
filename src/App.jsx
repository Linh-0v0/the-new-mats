// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/Themes";
import { AnimatePresence } from "framer-motion";
import Landing from "./sections/Landing";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence>
          <main className="App">
            <Landing />
            {/* Put Sections Here ! */}
          </main>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default App
