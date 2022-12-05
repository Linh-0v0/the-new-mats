import React, { useState } from "react";
import styled from "styled-components";
import BenefitCompo from "../components/BenefitCompo";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";

const Section = styled.section`
    position: relative;
    width: 100vw;
    margin-top: 3rem;
    overflow: hidden;
    background-color: ${(props) => `rgba(${props.theme.white}, 1)`};
`;

const Container = styled(motion.div)`
    width: 80%;
    margin: 0 auto;
    display: grid; 
    grid-template-columns: auto auto auto auto;
    column-gap: 2rem;
    padding-top: 2rem;
    h1 {                                              //phone
      padding-top: 5rem;
      font-size: ${(props) => props.theme.font5xl};
      font-weight: 800;
      color: ${(props) => `rgba(${props.theme.black}, 0.8)`};
      
      width: 100%;
      margin-bottom: 3rem;
      grid-column: 1/5;
      grid-row: 1/3;
    }
    @media only screen and (min-width: ${(props) => props.theme.tablet}){       //Tablet
      h1{
          grid-column: 1/5;
          grid-row: 1/3;
          font-size: ${(props) => props.theme.font4xl};
      }  
    }
    @media only screen and (min-width: ${(props) => props.theme.desktop}){       //desktop
      h1{   
          margin-top: 5rem;
          grid-column: 1/3;
          grid-row: 1/3;
          font-size: ${(props) => props.theme.font5xl};
      }  
    }
  }
`;

const benefitArticles = [
  {benefit:"Aesthetical",detail:"What we can bring to our customer possibly the profound and creativity in every products which will fill in the need and requirements of our guests",svgSrc:"/icons/GoodLooking.svg"},
  {benefit:"Technologies",detail:"All the essentials that we use and implement will be the top notch technologies nowaday to ensure that our and your visitor will experience the best performance in the product",svgSrc:"/icons/Technology.svg"},
  {benefit:"In time and precise",detail:"We are highly on schedule with everything and without doubt, yours will be as valueable as ours",svgSrc:"/icons/Time.svg"},
  {benefit:"Professional",detail:"With strict filtering and selection, our team form with skillfully and professinal members who will definitely assure that pleasant of our customer will always be prioritized",svgSrc:"/icons/Teamwork.svg"},
]


const Benefits = () => {


  return (
    <Section className="benefit-section" data-scroll-section >
        <Container
          onAnimationStart={() => {
            console.log("framer motion started");
          }}
        >
          <h1>Benefits of working with us</h1>
          {benefitArticles.map((article,i) => (
            <BenefitCompo 
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
