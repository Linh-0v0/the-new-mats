import React from "react";
import styled from "styled-components";
import Transitions from "../components/Transitions";
import GoBackArrow from "../components/GoBackArrow";
import IndividualInfo from "../sections/IndividualInfo";

const Container = styled.div`
  position: fixed;
  width: 50vw;
  height: 100vh;
  top: 0;
  left: 0;

  .individual-info-container {
    width: 50%;
    height: 100%;
    margin: 0 auto;
    padding: 4rem 0;
  }
`;

const CatEating = () => {
  return (
    <Transitions>
      <div className="experience">
        <canvas className="experience-canvas"></canvas>
      </div>

      <GoBackArrow />
      <Container>
        <div className="individual-info-container">
          <IndividualInfo />
        </div>
      </Container>
    </Transitions>
  );
};

export default CatEating;
