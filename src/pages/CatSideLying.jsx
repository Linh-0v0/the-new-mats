import React, { useRef } from "react";
import styled from "styled-components";
import Transitions from "../components/Transitions";
import GoBackArrow from "../components/GoBackArrow";
import { motion } from "framer-motion";
import LocoScroll from "../components/LocoScroll";

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
  display: none;
  width: 100%;
  height: 100%;
  z-index: -999;

  @media (max-width: 570px) {
    display: block;
    background: ${props => `rgba(${props.theme.white}, 0.7)`};
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

const CatSideLying = () => {
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
            <div className="progress-bar orange-background"></div>
          </div>
          <DarkOverlay></DarkOverlay>
          <Container
            variants={ContainerAnimation}
            initial="hidden"
            animate="show"
            data-scroll-section
          >
            <GoBackArrow />
            <InfoContainer>
              <h1>Individual Info</h1>
              <h2>Strength</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                error nam nobis quos quaerat eaque ea ab incidunt velit ipsum
                itaque quia voluptatibus impedit maxime dolore, nostrum ratione
                culpa enim?
              </p>
              <h2>Strength</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                error nam nobis quos quaerat eaque ea ab incidunt velit ipsum
                itaque quia voluptatibus impedit maxime dolore, nostrum ratione
                culpa enim?
              </p>
              <h2>Strength</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                error nam nobis quos quaerat eaque ea ab incidunt velit ipsum
                itaque quia voluptatibus impedit maxime dolore, nostrum ratione
                culpa enim?
              </p>
              <h2>Strength</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                error nam nobis quos quaerat eaque ea ab incidunt velit ipsum
                itaque quia voluptatibus impedit maxime dolore, nostrum ratione
                culpa enim?
              </p>
              <h2>Strength</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                error nam nobis quos quaerat eaque ea ab incidunt velit ipsum
                itaque quia voluptatibus impedit maxime dolore, nostrum ratione
                culpa enim?
              </p>
              <h2>Strength</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                error nam nobis quos quaerat eaque ea ab incidunt velit ipsum
                itaque quia voluptatibus impedit maxime dolore, nostrum ratione
                culpa enim?
              </p>
            </InfoContainer>
          </Container>
        </section>
      </LocoScroll>
    </Transitions>
  );
};

export default CatSideLying;
