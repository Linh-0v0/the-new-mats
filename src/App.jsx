import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ScrollerTriggerProxy from "./components/ScrollerTriggerProxy";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Landing from "./sections/Landing";
import Service from "./sections/Service";
import IndividualInfo from "./sections/IndividualInfo";

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
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
              <Landing />
              <Service />
              <IndividualInfo
                profileImageSrc=""
                aboutTitle="LOP"
                aboutParag="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis delectus facilis tempore odit rem? Aut numquam facilis consequuntur perferendis iste recusandae, et odio ad quidem. Ut, consectetur. Harum, temporibus officia."
                strengthTitle="LOP"
                strengthParag="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis delectus facilis tempore odit rem? Aut numquam facilis consequuntur perferendis iste recusandae, et odio ad quidem. Ut, consectetur. Harum, temporibus officia."
                sthTitle="LOP"
                sthParag="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis delectus facilis tempore odit rem? Aut numquam facilis consequuntur perferendis iste recusandae, et odio ad quidem. Ut, consectetur. Harum, temporibus officia."
              />
              
              {/* Put Sections Here ! */}
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
