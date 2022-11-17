import React from "react";
import styled from "styled-components";

// Remember to style Section like below for
// every section.
const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 55%;
  text-align: center;

  h1 {
    font-family: "Josefin Sans";
    font-size: ${(props) => props.theme.font5xl};
    font-weight: 500;
    color: ${(props) => `rgba(${props.theme.black}, 1)`};
  }

  p {
    font-size: ${(props) => props.theme.fontxs};
    font-weight: 300;
    color: ${(props) => `rgba(${props.theme.black}, 1)`};
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    width: 80%;

    h1 {
      font-size: 5rem;
    }
  }
`;

const Landing = () => {
  return (
    <Section className="landingSection" data-scroll-section>
      {/* <Container> */}
      <h1>THE NEW MATS</h1>
        {/* <TitleContainer>
          <h1>THE NEW MATS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Enim in in adipiscing lectus
            diam sit.
          </p>
        </TitleContainer> */}
        {/* <CatModels /> */}
      {/* </Container> */}
    </Section>
  );
};

export default Landing;
