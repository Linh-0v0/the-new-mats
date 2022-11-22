import React from "react";
import styled from "styled-components";
import InfoDetail from "../components/InfoDetail";
import InfoPic from "../components/InfoPic";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  h1 {
    font-weight: 200;
    font-size: ${(props) => props.theme.font3xl};
  }
`;

const IndividualInfo = () => {
  return (
    <Section data-scroll-section>
      <Container>
        <InfoPic>
          <img src={profileImageSrc} alt="Your Avatar" />
        </InfoPic>
        <h1>InSectionidualInfo</h1>
        <InfoDetail
          title="ABout"
          parag="Design and create website along with customer requests fully interactive with mostly every devices "
        />
        <InfoDetail
          title="Streng"
          parag="Design and create website along with customer requests fully interactive with mostly every devices "
        />
        <InfoDetail
          title="sdfds"
          parag="Design and create website along with customer requests fully interactive with mostly every devices "
        />
      </Container>
    </Section>
  );
};

export default IndividualInfo;
