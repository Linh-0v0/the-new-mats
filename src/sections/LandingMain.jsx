import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  backgroundColor: transparent;
  z-index: 0;

  .petButton {
    position: absolute;
    padding-right: 1rem;
    left: 0;
    right: 0;
    bottom: 2.5rem;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: ${(props) => props.theme.fontsm};
      font-weight: 700;
      padding-left: 1rem;
    }
  }
`;

const LandingMain = () => {
  return (
    <Section className="landing-main-section">
        <div className="petButton">
          <img src="./icons/paw-edit.png" alt="paw" width="50px" />
          <p>Pet one</p>
        </div>
    </Section>
  );
};

export default LandingMain;
