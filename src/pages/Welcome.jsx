import React from "react";
import { useEffect } from "react";
import IntroTextPreloader from "../components/IntroTextPreloader";

const Welcome = () => {
  const url = window.location.href;
  useEffect(() => {
    window.addEventListener("click", () => {
      history.pushState(null, null, url + "home");
    });
  }, []);
  return (
    <>
      <div className="experience relative-pos">
        <canvas className="experience-canvas"></canvas>
      </div>
      <IntroTextPreloader />
    </>
  );
};

export default Welcome;
