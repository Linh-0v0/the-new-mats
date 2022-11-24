import React from "react";
import styled from "styled-components";
import Transitions from "../components/Transitions";
import GoBackArrow from "../components/GoBackArrow";

const Container = styled.div`
  position: relative;

  h1 {
    font-size: 3rem;
    z-index: 10;
  }
`;

const CatPlaying = () => {
  return (
    <Transitions>
      <div className="experience">
        <canvas className="experience-canvas"></canvas>
      </div>
      <Container>
        <GoBackArrow />
        <div className="cat-section">
          <h1 className="mt-5 text-center" style={{ color: "green" }}>
            CAT PLAYING
          </h1>
        </div>
      </Container>
    </Transitions>
  );
};

export default CatPlaying;
