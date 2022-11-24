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

const CatEating = () => {
  return (
    <Transitions>
      <div className="experience">
        <canvas className="experience-canvas"></canvas>
      </div>

      <Container>
        <div className="cat-section">
          <GoBackArrow />
          <h1>Eating Cat</h1>
        </div>
      </Container>
    </Transitions>
  );
};

export default CatEating;
