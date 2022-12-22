import React from "react";
import styled from "styled-components";
import InfoDetail from "../components/InfoDetail";

const Section = styled.section`
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

const Container = styled.div`
  width: 50%;
  // background-color: ${(props) => `rgba(${props.theme.sky}, 1)`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-left: 4rem;

  h1 {
    font-weight: 600;
    font-size: ${(props) => props.theme.fontxl};
    padding-top: 2rem;
    padding-bottom: 3rem;
    text-align: center;
  }

  .imgContainer {
    width: 162px;
    height: 162px;
    border-radius: 50%;
    overflow: hidden;
    // border: 2px solid ${(props) => `rgba(${props.theme.pink}, 1)`};

    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
      width: 80%;
      height: 80%:
    }
  }

  @media (max-width: 570px) {
    width: 80%;
    margin: 0 auto;
    padding-left: 0;
  }
`;

const InfoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 4rem;
  padding-left: 1rem;
`;

const IndividualInfo = ({
  charColor,
  profileImageSrc,
  fullName,
  about,
  role,
  specialization,
  contact,
  linkTitlesDict,
}) => {
  return (
    <Section data-scroll-section>
      <Container>
        <div
          className="imgContainer"
          style={{ border: `2px solid ${charColor}` }}
        >
          <img src={profileImageSrc} alt="Avatar" />
        </div>

        <h1 style={{ color: charColor }}>{fullName ?? ""}</h1>
        <InfoDetailContainer>
          <InfoDetail title="About" parag={about} charColor={charColor} />
          <InfoDetail title="Role" parag={role} charColor={charColor} />
          <InfoDetail
            title="Specialization"
            parag={specialization}
            charColor={charColor}
          />
          <InfoDetail
            charColor={charColor}
            title="Contact"
            parag={contact ?? ""}
            linkTitlesDict={linkTitlesDict}
          />
        </InfoDetailContainer>
      </Container>
    </Section>
  );
};

export default IndividualInfo;
