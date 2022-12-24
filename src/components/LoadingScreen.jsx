import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 1000;
`;

const Container = styled(motion.div)`
  initial: {
    transition: {
      staggerchildren: 0.2;
    }
  }
  ,
  animate: {
    transition: {
      staggerchildren: 0.2;
    }
  }
`;

const LoadingDot = styled(motion.span)`
    display: "block",
    width: "2rem",
    height: "2rem",
    backgroundColor: "black",
    borderRadius: "50%"
  `;

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const LoadingScreen = () => {
  return (
    <Section>
      <h1>Loading</h1>
      <Container
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <LoadingDot
          variants={DotVariants}
          transition={DotTransition}
        ></LoadingDot>
        <LoadingDot
          variants={DotVariants}
          transition={DotTransition}
        ></LoadingDot>
        <LoadingDot
          variants={DotVariants}
          transition={DotTransition}
        ></LoadingDot>
      </Container>
    </Section>
  );
};

export default LoadingScreen;
