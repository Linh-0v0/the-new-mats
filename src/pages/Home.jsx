import React, { useRef } from "react";
import styled from "styled-components";
import Landing from "../sections/Landing";
import Service from "../sections/Service";
import LandingMain from "../sections/LandingMain";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ScrollerTriggerProxy from "../components/ScrollerTriggerProxy";

const Home = () => {
  const containerRef = useRef(null);

  return (
    <div className="experience">
      <canvas className="experience-canvas"></canvas>
    </div>
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //     // ... all available Locomotive Scroll instance options,
    //     mobile: {
    //       breakpoint: 0,
    //       smooth: true,
    //     },
    //     tablet: {
    //       breakpoint: 0,
    //       smooth: true,
    //     },
    //   }}
    //   watch={
    //     [
    //       //..all the dependencies you want to watch to update the scroll.
    //       //  Basicaly, you would want to watch page/location changes
    //       //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    //     ]
    //   }
    //   containerRef={containerRef}
    // >
    //   <ScrollerTriggerProxy />
    //   <main className="App" data-scroll-container ref={containerRef}>

    //     <LandingMain />

    //     <div className="first-move"></div>
    //     <Landing />

    //     <Service />
    //     {/* Put Sections Here ! */}
    //   </main>
    // </LocomotiveScrollProvider>
  );
};

export default Home;
