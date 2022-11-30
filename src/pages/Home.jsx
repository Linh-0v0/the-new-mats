import React, { useRef } from "react";
import styled from "styled-components";
import Landing from "../sections/Landing";
import Service from "../sections/Service";
import LandingMain from "../sections/LandingMain";
import LocoScroll from "../components/LocoScroll";
import IntroTextPreloader from "../components/IntroTextPreloader";
import Benefits from "../sections/Benefits";

const Space = styled.div`
  position: relative;
  height: 4rem;
  width: 100vw;
  background-color: transparent;
`;

const Home = () => {
  const containerRef = useRef(null);

  return (
  //   <div
  //   className="experience relative-pos"
  //   data-scroll
  //   data-scroll-section
  //   data-scroll-sticky
  // >
  //   <canvas className="experience-canvas"></canvas>
  // </div>
    <LocoScroll refName={containerRef}>
      <main className="App" data-scroll-container ref={containerRef}>
        <div
          className="experience relative-pos"
        >
          <canvas className="experience-canvas"></canvas>
        </div>

        <IntroTextPreloader />

        <LandingMain />

        <div className="first-move"></div>

        <Benefits />

        <Space data-scroll-section></Space>
        <Service />
        {/* </Overlay> */}
      </main>
    </LocoScroll>
  );
};

export default Home;
