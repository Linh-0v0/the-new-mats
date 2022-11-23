import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 99999;
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  text-align: center;

  h1 {
    font-size: ${(props) => props.theme.font5xl};
    color: ${(props) => `rgba(${props.theme.orange}, 1)`};
  }

  p {
    font-size: ${(props) => props.theme.fontxs};
  }

  .paragContainer {
    width: 60%;
    margin: 0 auto;
  }

  .petButton {
    position: absolute;
    width: 300px;
    left: 0;
    right: 0;
    bottom: 25px;
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

  .petButton:hover {
    cursor: pointer;
  }
`;

const LandingMain = () => {
  return (
    <Section className="landing-main-section" data-scroll-section>
      <Container>
        <h1>The New Mats</h1>
        <div className="paragContainer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            animi! Esse accusantium quidem natus?
          </p>
        </div>
        <div className="petButton">
          <img src="./icons/paw-edit.png" alt="paw" width="50px" />
          <p>Pet one</p>
        </div>
      </Container>
    </Section>
  );
};

export default LandingMain;
