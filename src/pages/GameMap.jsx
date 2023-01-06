import React from "react";
import Transitions from "../components/Transitions";

const GameMap = () => {
  return (
    <Transitions>
      <div className="experience">
        <canvas className="experience-canvas"></canvas>
      </div>
    </Transitions>
  );
};

export default GameMap;
