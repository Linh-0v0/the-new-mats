import React from "react";
import styled from "styled-components";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";

const Container = styled(motion.div)`
  grid-row: span 1;
  grid-column: span 4;
  text-align: center;
  font-size: ${(props) => props.theme.fontxxs};

  p {
    font-weight: 350;
    line-height: 1.4;
  }

  h3 {
    padding: 1rem 0;
  }

  @media (min-width: ${(props) => props.theme.xsmobile}) {
    padding-bottom: 2rem;
  }

  @media (min-width: ${(props) => props.theme.tablet}) {
    grid-column: span 2;
    padding-bottom: 3rem;
    font-size: ${(props) => props.theme.fontxs};
  }

  @media (min-width: ${(props) => props.theme.desktop}) {
    grid-column: span 1;
    padding-bottom: 5rem;
    text-align: left;

    img {
      padding-bottom: 1rem;
    }

    h3 {
      padding-bottom: 0.5rem;
    }
  }
`;

const BenefitCompo = ({ benefit, detail, svgSrc, indexOfCompo }) => {
  const compoRef = useRef(null);
  const isInView = useInView(compoRef); // Only animate once when user first enter the website
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      // Base website: What will the user see
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.25,
          ease: "easeOut",
        },
      });
    } else {
      controls.start({
        // Set up for before animation
        x: indexOfCompo % 2 == 0 ? -40 : 40,
        opacity: 0,
      });
    }
  }, [isInView]);

  return (
    <Container ref={compoRef} whileHover={{ scale: 0.9 }} animate={controls}>
      <img src={svgSrc} width="50rem" height="50rem" alt="Icon image" />
      <h3>{benefit}</h3>
      <p>{detail}</p>
    </Container>
  );
};

export default BenefitCompo;
