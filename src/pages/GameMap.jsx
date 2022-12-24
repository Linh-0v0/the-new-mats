import React from "react";
import { useEffect } from "react";
import Transitions from "../components/Transitions";

const GameMap = () => {
  useEffect(() => {
    if (sessionStorage.getItem("loadingState") == "true") {
      alert("Please wait a little bit for model to load 😘");
    }
  }, []);
  return (
    <Transitions>
      <div className="experience">
        <canvas className="experience-canvas"></canvas>
      </div>
    </Transitions>
  );
};

export default GameMap;
