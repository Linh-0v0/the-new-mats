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
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 200;
    font-size: ${(props) => props.theme.font3xl};
  }
`;

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
        <InfoDetail title={aboutTitle} parag={aboutParag} />
        <InfoDetail title={strengthTitle} parag={strengthParag} />
        <InfoDetail title={sthTitle} parag={sthParag} />
      </Container>
    </Section>
  );
};

export default IndividualInfo;
