import React from "react";
import styled from "styled-components";
import Transitions from "../components/Transitions";
import GoBackArrow from "../components/GoBackArrow";

const Container = styled.div`
  h1 {
    font-size: 3rem;
    z-index: 10;
  }
`;

const CatEating = () => {
  return (
    <Transitions>
      <Container>
      <GoBackArrow />
      <div className="experience">
        <canvas className="experience-canvas"></canvas>
      </div>
      <h1>Eating Cat</h1>
      </Container>
    </Transitions>
  );
};

export default CatEating;
