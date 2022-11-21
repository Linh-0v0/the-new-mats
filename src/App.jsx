import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ScrollerTriggerProxy from "./components/ScrollerTriggerProxy";
import { AnimatePresence } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 
import Landing from "./sections/Landing";
import Service from "./sections/Service";
import LandingMain from "./sections/LandingMain";

function App() {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    let element = containerRef.current;
  }, []);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options,
            mobile: {
              breakpoint: 0,
              smooth: true,
            },
            tablet: {
              breakpoint: 0,
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollerTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <div className="experience">
                <canvas className="experience-canvas"></canvas>
              </div>

              <LandingMain />

              <div className="first-move"></div>
              <Landing />

              <Service />
              {/* Put Sections Here ! */}
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
