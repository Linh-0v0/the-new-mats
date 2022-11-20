import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 99999;
`;

const LandingMain = () => {
  return (
    <Section>
      <h1>The New Mats</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
        animi! Esse accusantium quidem natus?
      </p>
    </Section>
  );
};

export default LandingMain;
