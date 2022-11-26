import React, { useRef } from "react";
import styled from "styled-components";
import Landing from "../sections/Landing";
import Service from "../sections/Service";
import LandingMain from "../sections/LandingMain";
import LocoScroll from "../components/LocoScroll";
import IntroTextPreloader from "../components/IntroTextPreloader";

const Home = () => {
  const containerRef = useRef(null);

  return (
    <>
      <div className="experience">
        <canvas className="experience-canvas"></canvas>
      </div>
      <IntroTextPreloader />
    </>
    // <LocoScroll refName={containerRef}>
    //   <main className="App" data-scroll-container ref={containerRef}>
    //     <div className="experience">
    //       <canvas className="experience-canvas"></canvas>
    //     </div>
    //     <LandingMain />

    //     <div className="first-move"></div>
    //     <Landing />

    //     <Service />
    //     {/* Put Sections Here ! */}
    //   </main>
    // </LocoScroll>
  );
};

export default Home;
