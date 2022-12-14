import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
import Service from "../sections/Service";
import LandingMain from "../sections/LandingMain";
import LocoScroll from "../components/LocoScroll";
import IntroTextPreloader from "../components/IntroTextPreloader";
import Benefits from "../sections/Benefits";
import NavBar from "../components/NavBar";
import Contact from "../sections/Contact";
import GameMapSection from "../sections/GameMapSection";

const Space = styled.div`
  position: relative;
  height: 4rem;
  width: 100vw;
  background-color: white;
`;

const TransparentOverlay = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
`;

const Home = () => {
  const containerRef = useRef(null);
  const [isIn, setIsIn] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (window.location.pathname == "/") {
      window.addEventListener("click", () => {
        setTimeout(() => {
          setIsIn(true);
        }, 1500);
      });
    } else {
      setIsIn(true);
    }
  }, []);

  useLayoutEffect(() => {
    const element = containerRef.current;
    // var tl = new gsap.timeline();
    setTimeout(() => {
      gsap.to(element.querySelector(".nav-container"), {
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        duration: 0.5,
        scrollTrigger: {
          trigger: element.querySelector(".benefit-section"),
          scroller: ".App",
          scrub: true,
          start: "-15% top",
          end: "bottom bottom",
        },
      });
      ScrollTrigger.refresh();
    }, 1000);
  }, []);

  return (
    <LocoScroll refName={containerRef}>
      <main className="App" data-scroll-container ref={containerRef}>
        <div className="experience relative-pos" data-scroll-section>
          <canvas className="experience-canvas"></canvas>
        </div>
        <IntroTextPreloader />

        <NavBar />

        {/* <TransparentOverlay data-scroll-section></TransparentOverlay> */}

        {isIn ? <LandingMain data-scroll-section /> : null}

        <div className="first-move"></div>

        <Space data-scroll-section></Space>
        <Benefits />

        <Space data-scroll-section></Space>
        <Service />

        <Space data-scroll-section></Space>
        <GameMapSection />
        <Contact />
      </main>
    </LocoScroll>
  );
};

export default Home;
