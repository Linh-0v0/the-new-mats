import React, { useRef } from "react";
import styled from "styled-components";
import Transitions from "../components/Transitions";
import GoBackArrow from "../components/GoBackArrow";
import { motion } from "framer-motion";
import LocoScroll from "../components/LocoScroll";
import IndividualInfo from "../sections/IndividualInfo"

const Container = styled(motion.div)`
  width: 50%;

  @media (max-width: 570px) {
    width: 100%;
  }

`;

const InfoContainer = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;

  h1 {
    font-size: 3rem;
    padding-bottom: 2rem;
    color: ${props => `rgba(${props.theme.orange}, 1)`};
  }

  h2 {
    font-size: 2rem;
    padding-bottom: 1rem;
    color: ${props => `rgba(${props.theme.orange}, 1)`};
  }

  @media (max-width: 570px) {
    width: 80%;

    p {
      font-weight: 400;
      color: ${props => `rgba(${props.theme.orange}, 1)`};
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top:0;
  display: none;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${(props) => `rgba(${props.theme.white}, 0.2)`};

  @media (max-width: 570px) {
    display: block;
  }
`;

const ContainerAnimation = {
  hidden: {
    x: "-50vw",
  },
  show: {
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

const CatStanding = () => {
  const catContainerRef = useRef(null);
  return (
    <Transitions>
      <div className="experience">
        <canvas className="experience-canvas"></canvas>
      </div>

      <LocoScroll refName={catContainerRef}>
        <section
          className="cat-page"
          data-scroll-container
          ref={catContainerRef}
        >
          <div className="progress-wrapper progress-bar-wrapper-left">
            <div className="progress-bar purple-background"></div>
          </div>
          <DarkOverlay></DarkOverlay>
          <Container
            variants={ContainerAnimation}
            initial="hidden"
            animate="show"
            data-scroll-section
          >
            <GoBackArrow fillColor="rgb(154, 136, 179)" />
            <IndividualInfo
              charColor="rgb(154, 136, 179)"
              profileImageSrc="/images/nham.jpg"
              fullName="Nguyen Hoang To Nhu "
              about="A fat cat"
              role="UX/UI Designer, 3D Designer"
              specialization="I???m just a fat cat walking by and helping my comrade (Linh) do the project "
              linkTitlesDict={[{title: "Email", link: "nguyen.hoangtonhu1211@gmail.com"}]}
            />
          </Container>
        </section>
      </LocoScroll>
    </Transitions>
  );
};

export default CatStanding;
