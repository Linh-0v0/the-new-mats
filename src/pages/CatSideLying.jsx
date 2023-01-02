import React, { useRef } from "react";
import styled from "styled-components";
import Transitions from "../components/Transitions";
import GoBackArrow from "../components/GoBackArrow";
import { motion } from "framer-motion";
import LocoScroll from "../components/LocoScroll";
import IndividualInfo from "../sections/IndividualInfo";

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
            <div className="progress-bar darkBeige-background"></div>
          </div>
          <DarkOverlay></DarkOverlay>
          <Container
            variants={ContainerAnimation}
            initial="hidden"
            animate="show"
            data-scroll-section
          >
            <GoBackArrow fillColor="rgb(525, 137, 148)" />
            <IndividualInfo
              charColor="rgb(525, 137, 148)"
              profileImageSrc="/images/panh.jpeg"
              fullName="Huynh Phan Anh"
              about="I'm a Vietnamese person, and I always passionate about learning about AI and eventually creating my own AI assistant."
              role="Web Progammer front-end mainly."
              specialization="I have certain experiences about building websites and I can also work with IoT product if needed so basically I strong with design and structurize web and object."
              linkTitlesDict={[{title: "Email", link: "huynhphana@gmail.com"}, {title: "Phone", link: "0907879669"}]}
            />
          </Container>
        </section>
      </LocoScroll>
    </Transitions>
  );
};

export default CatSideLying;
