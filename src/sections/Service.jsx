import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";


const Section = styled.section`
  position: relative;
  height: auto;
  width: 100vw;
  overflow: hidden;
  background-color: ${(props) => `rgba(${props.theme.white}, 1)`};
  `;


const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5vw;
  h1 {
    font-size: ${(props) => props.theme.font4xl};
    color: ${(props) => `rgba(${props.theme.black}, 0.8)`};
    font-weight: 800;
    grid-column: span 3;  
    margin-bottom: 2rem;

  }
  @media only screen and (min-width: ${(props) => props.theme.desktop}){       //desktop
    h1{
      font-size: ${(props) => props.theme.font5xl};
    }
  }
  `;

const ServiceContainer = styled(motion.div)`
  justify-content: center;
  text-align: center;
  h3 {
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 550;
  }
  p {
    font-size: ${(props) => props.theme.fontssm};
    font-weight:350;
  }
  @media (min-width: ${(props) => props.theme.tablet}) {      //Tablet
    h3 {
    font-size: ${(props) => props.theme.fontlg};
    }
  @media (min-width: ${(props) => props.theme.desktop}) {      //Desktop
    p {
    font-size: ${(props) => props.theme.fontsm};
    }
  }
`;



const serviceInfos = [
  {src:"icons/lightbulb.svg",header:"Websites and platforms",detail:"Design and create website along with the customer requests fully interactive with mostly every devices"},
  {src:"icons/lightbulb.svg",header:"Mobile applications",detail:"Create fully function application separated from the website and more addons features"},
  {src:"icons/lightbulb.svg",header:"UI/UX design",detail:"Analyze the need of customer to perform on the designing section"}
]



const Service = () => {



  return (
    <Section data-scroll-section>
      <Container>
        <h1>Services</h1>
        {serviceInfos.map((article,i) => (
            <ServiceContainer
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: i*0.25
              }
            }}
            whileHover={{scale:0.9}}
            >
              <h3>{article.header}</h3>
              <img src={article.src}></img>
              <p>{article.detail}</p>
            </ServiceContainer>
        ))}
      </Container>
    </Section>
  );
};

export default Service;
