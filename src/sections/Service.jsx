import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const ServiceContainer = styled.div`
 h1 {
    font-family: "Josefin Sans"
    font-size: ${(props) => props.theme.font5xl};
    font-weight: 800;
    color: ${(props) => `rgba(${props.theme.black}, 0.2)`};
 }
`;

const Service = () => {
  return (
    <Section data-scroll-section>
      <ServiceContainer>
        <h1>Service</h1>
        <p>aloooooooooooooooooooo</p>
      </ServiceContainer>
    </Section>
  );
};

export default Service;
