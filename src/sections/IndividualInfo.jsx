import React from "react";
import styled from "styled-components";
import InfoDetail from "../components/InfoDetail";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  
`;

const Container = styled.div`
  width: 40%;
  background-color: ${props => `rgba(${props.theme.sky}, 1)`};
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 200;
    font-size: ${(props) => props.theme.font3xl};
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    width: 100vw;
  }
`;

const InfoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 4rem;

`

const IndividualInfo = ({
  profileImageSrc,
  aboutTitle,
  aboutParag,
  strengthTitle,
  strengthParag,
  sthTitle,
  sthParag,
}) => {
  return (
    <Section data-scroll-section>
      <Container>
        <img src={profileImageSrc} alt="Avatar" />

        <h1>InSectionidualInfo</h1>
        <InfoDetailContainer>
          <InfoDetail title={aboutTitle} parag={aboutParag} />
          <InfoDetail title={strengthTitle} parag={strengthParag} />
          <InfoDetail title={sthTitle} parag={sthParag} />
        </InfoDetailContainer>
      </Container>
    </Section>
  );
};

export default IndividualInfo;
