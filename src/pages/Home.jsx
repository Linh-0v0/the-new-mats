import React, { useRef } from "react";
import styled from "styled-components";
import Landing from "../sections/Landing";
import Service from "../sections/Service";
import LandingMain from "../sections/LandingMain";
import LocoScroll from "../components/LocoScroll";
import IntroTextPreloader from "../components/IntroTextPreloader";
import Benefits from "../sections/Benefits";

const Container = styled.div`
  .benefit-container {
    padding-bottom: 4rem;
  }
`

const Home = () => {
  const containerRef = useRef(null);

  return (
    <Container>
       <div
            className="experience relative-pos"
            data-scroll
            data-scroll-section
            data-scroll-sticky
          >
            <canvas className="experience-canvas"></canvas>
          </div>
      {/* <LocoScroll refName={containerRef}>
        <main className="App" data-scroll-container ref={containerRef}>
          <div
            className="experience relative-pos"
            data-scroll
            data-scroll-section
            data-scroll-sticky
          >
            <canvas className="experience-canvas"></canvas>
          </div> */}

          {/* <IntroTextPreloader /> */}
          {/* <div className="lading-main-container">
            <LandingMain />
          </div>

          <div className="first-move"></div>
          <div className="benefit-container">
            <Benefits />
          </div>

          <div className="service-container">
            <Service />
          </div>
        </main> */}
      {/* </LocoScroll> */}
    </Container>
  );
};

export default Home;
