import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
import Landing from "../sections/Landing";
import Service from "../sections/Service";
import LandingMain from "../sections/LandingMain";
import LocoScroll from "../components/LocoScroll";
import IntroTextPreloader from "../components/IntroTextPreloader";
import Benefits from "../sections/Benefits";
import NavBar from "../components/NavBar";

const Space = styled.div`
  position: relative;
  height: 4rem;
  width: 100vw;
  background-color: transparent;
`;

const TransparentOverlay = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
`

const Home = () => {
  const containerRef = useRef(null);
  const [isIn, setIsIn] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    window.addEventListener("click", () => {
      setTimeout(() => {
        setIsIn(true);
      }, 1500);
    });
    const element = containerRef.current;
    var tl = new gsap.timeline();
    setTimeout(() => {
      tl.to(element.querySelector(".nav-container"), {
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        duration: 0.5,
        scrollTrigger: {
          trigger: element.querySelector(".benefit-section"),
          scroller: ".App",
          scrub: true,
          start: "-90% top",
          markers: true,
        },
      });
      ScrollTrigger.refresh();
    }, 1000);
  }, []);

  return (
    <LocoScroll refName={containerRef}>
      <main className="App" data-scroll-container ref={containerRef}>
        <div className="experience">
          <canvas className="experience-canvas"></canvas>
        </div>

        <IntroTextPreloader />

        <NavBar />

        <TransparentOverlay data-scroll-section></TransparentOverlay>

        {isIn ? <LandingMain /> : null}

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
