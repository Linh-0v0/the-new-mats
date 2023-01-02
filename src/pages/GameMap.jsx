import React from "react";
import { useEffect } from "react";
import Transitions from "../components/Transitions";

const GameMap = () => {
  useEffect(() => {
    if (sessionStorage.getItem("loadingState") == "true") {
      alert("Please wait a bit for model to load 😘. Also, pleaze click 'OK' to start running the model now.");
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
