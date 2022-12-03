import React from "react";
import styled from "styled-components";
import BenefitCompo from "../components/BenefitCompo";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";

const Section = styled.section`
  position: relative;
  margin-top: 3rem;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${(props) => `rgba(${props.theme.white}, 1)`};
`;

const Container = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto auto;
  column-gap: 2rem;
  h1 {
    //phone
    padding-top: 5rem;
    font-size: ${(props) => props.theme.font5xl};
    font-weight: 800;
    color: ${(props) => `rgba(${props.theme.black}, 0.8)`};

    width: 100%;
    margin-bottom: 3rem;
    grid-column: 1/5;
    grid-row: 1/3;
  }
  @media only screen and (min-width: 768px) {
    //Tablet
    h1 {
      grid-column: 1/5;
      grid-row: 1/3;
    }
  }
  @media only screen and (min-width: 1080px) {
    //desktop
    h1 {
      grid-column: 1/3;
      grid-row: 1/3;
    }
  }
`;

const ContainerAnimation = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

const Benefits = () => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [isInView])

  return (
    <Section className="benefit-section" data-scroll-section ref={sectionRef}>
        <Container
          variants={ContainerAnimation}
          animate={controls}
        >
          <h1>Benefits of working with us</h1>
          <BenefitCompo
            benefit="Aesthetical"
            detail="What we can bring to our customer possibly the profound 
                    and creativity in every products which will fill in the need and 
                    requirements of our guests"
            svgSrc="/icons/GoodLooking.svg"
          />
          <BenefitCompo
            benefit="Technologies"
            detail="All the essentials that we use and implement will be the 
                    top notch technologies nowaday to ensure that our and your visitor 
                    will experience the best performance in the product"
            svgSrc="/icons/Technology.svg"
          />
          <BenefitCompo
            benefit="In time and precise"
            detail="We are highly on schedule with everything and without doubt 
                    your time will be as valueable as ours"
            svgSrc="/icons/Time.svg"
          />
          <BenefitCompo
            benefit="Well trained team"
            detail="With strict filtering and selection our team form with skillful 
                    and professional members who will definitely assure that pleasant of our 
                    customer will always be prioritized"
            svgSrc="/icons/Teamwork.svg"
          />
        </Container>
    </Section>
  );
};

export default Benefits;
