import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Container = styled.div`
  h1 {
    font-weight: 200;
    font-size: ${(props) => props.theme.font3xl};
  }
`;

const IndividualInfo = () => {
  return (
    <Section data-scroll-section>
      <Container>
        <h1>InSectionidualInfo</h1>
      </Container>
    </Section>
  );
};

export default IndividualInfo;
