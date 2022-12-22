import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${(props) => `rgba(${props.theme.white}, 1)`};
`;

const BigCotnainer = styled.div`
  width: 80%;
  margin: 0 auto;

  h1 {
    font-size: ${(props) => props.theme.font4xl};
    color: ${(props) => `rgba(${props.theme.black}, 0.8)`};
    font-weight: 800;
    padding-bottom: 2rem;
  }

  @media (min-width: ${(props) => props.theme.mobile}) {
    h1 {
      font-size: ${(props) => props.theme.font3xl};
    }
  }

  @media (min-width: ${(props) => props.theme.tablet}) {
    h1 {
      padding-bottom: 4rem;
      font-size: ${(props) => props.theme.font4xl};
    }
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5vw;

  @media (max-width: ${(props) => props.theme.tablet}) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 3.2rem;
  }
`;

const ServiceContainer = styled(motion.div)`
  justify-content: center;
  text-align: center;

  h3 {
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 550;
    padding-bottom: 1rem;
  }

  p {
    padding-top: 1rem;
    font-size: ${(props) => props.theme.fontxs};
    font-weight: 350;
    width: 80%;
    margin: 0 auto;
  }

  img {
    width: 3rem;
  }

  @media (min-width: ${(props) => props.theme.tablet}) {
    h3 {
      font-size: ${(props) => props.theme.fontxl};
      padding-bottom: 2.3rem;
      min-height: 6rem;
    }

    p {
      font-size: ${(props) => props.theme.fontsm};
      padding-top: 2.3rem;
      line-height: 1.7;
    }

    img {
      width: 5rem;
    }
    
  @media (min-width: ${(props) => props.theme.desktop}) {    
    h3 {
      font-size: ${(props) => props.theme.fontxl};
    }

    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const serviceInfos = [
  {
    src: "icons/Webpage.svg",
    header: "Websites and platforms",
    detail:
      "Design and create website along with the customer requests fully interactive with mostly every devices",
  },
  {
    src: "icons/Mobile.svg",
    header: "Mobile applications",
    detail:
      "Create fully function application separated from the website and more addons features",
  },
  {
    src: "icons/UI.svg",
    header: "UI/UX designs",
    detail: "Analyze the need of customer to perform on the designing section",
  },
];

const Service = () => {
  return (
    <Section data-scroll-section id="service">
      <BigCotnainer>
        <h1>Services</h1>
        <Container>
          {serviceInfos.map((article, i) => (
            <ServiceContainer
              key={i}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.75,
                  delay: 0.2 + i * 0.25,
                },
              }}
              whileHover={{ scale: 0.9 }}
            >
              <h3>{article.header}</h3>
              <img src={article.src}></img>
              <p>{article.detail}</p>
            </ServiceContainer>
          ))}
        </Container>
      </BigCotnainer>
    </Section>
  );
};

export default Service;
