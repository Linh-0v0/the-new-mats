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

const CatLying = () => {
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
            <div className="progress-bar darkBrown-background"></div>
          </div>
          <DarkOverlay></DarkOverlay>
          <Container
            variants={ContainerAnimation}
            initial="hidden"
            animate="show"
            data-scroll-section
          >
            <GoBackArrow fillColor="rgb(86, 56, 22)" />
            <IndividualInfo
              charColor="rgb(86, 56, 22)"
              profileImageSrc="/images/thinh.png"
              fullName="Nguyen Duong Truong Thinh"
              about="I was born in 2002, growing up in Long An and recently living in HCM city. I’m passionate about IT projects,  IoT learning and working with the technologies."
              role="Web programmer, technical writer."
              specialization="I’m concentrated on web programming and front-end. Also for the IoT management systems, I can plan in many kinds of data analytics or application development."
              linkTitlesDict={[{title: "Email", link: "truongthinh140402@gmail.com"}]}
            />
          </Container>
        </section>
      </LocoScroll>
    </Transitions>
  );
};

export default CatLying;
