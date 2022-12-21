import React, { useState } from "react";
import styled from "styled-components";
import BenefitCompo from "../components/BenefitCompo";
import { motion } from "framer-motion";

const Section = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  overflow: hidden;
  background-color: ${(props) => `rgba(${props.theme.white}, 1)`};
`;

const Container = styled(motion.div)`
    width: 80%;
    margin: 0 auto;
    display: grid; 
    grid-template-columns: auto auto auto auto;

    h1 {                                              
      padding-top: 3rem;
      font-size: ${(props) => props.theme.font4xl};
      font-weight: 800;
      color: ${(props) => `rgba(${props.theme.black}, 0.8)`};
      
      width: 100%;
      padding-bottom: 2.5rem;
      grid-column: 1/5;
      grid-row: 1/3;
    }

    @media (min-width: ${(props) => props.theme.mobile}){    
      column-gap: 5rem;
      row-gap: 2.3rem;
   
      h1 {
        padding-top: 2rem;
        padding-bottom: 0.5rem;
          grid-column: 1/5;
          grid-row: 1/3;
          font-size: ${(props) => props.theme.font3xl};
      }  
    }

    @media (min-width: ${(props) => props.theme.tablet}){       
      h1 {
        padding-bottom: 2rem;
        grid-column: 1/5;
        grid-row: 1/3;
        font-size: ${(props) => props.theme.font4xl};
      }  
    }

    @media (min-width: ${(props) => props.theme.desktop}) {       
      h1 {   
          grid-column: 1/3;
          font-size: ${(props) => props.theme.font4xl};
      }  
    }
  }
`;

const benefitArticles = [
  {
    benefit: "Aesthetical",
    detail:
      "What we can bring to our customer possibly the profound and creativity in every products which will fill in the need and requirements of our guests",
    svgSrc: "/icons/GoodLooking.svg",
  },
  {
    benefit: "Technologies",
    detail:
      "All the essentials that we use and implement will be the top notch technologies nowaday to ensure that our and your visitor will experience the best performance in the product",
    svgSrc: "/icons/Technology.svg",
  },
  {
    benefit: "In time and precise",
    detail:
      "We are highly on schedule with everything and without doubt, yours will be as valueable as ours",
    svgSrc: "/icons/Time.svg",
  },
  {
    benefit: "Professional",
    detail:
      "With strict filtering and selection, our team form with skillfully and professinal members who will definitely assure that pleasant of our customer will always be prioritized",
    svgSrc: "/icons/Teamwork.svg",
  },
];

const Benefits = () => {
  return (
    <Section className="benefit-section" data-scroll-section>
      <Container>
        <h1>Benefits of working with us</h1>
        {benefitArticles.map((article, i) => (
          <BenefitCompo
            key={i}
            benefit={article.benefit}
            detail={article.detail}
            svgSrc={article.svgSrc}
            indexOfCompo={i}
          />
        ))}
      </Container>
    </Section>
  );
};

export default Benefits;
