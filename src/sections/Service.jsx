import styled from "styled-components";
import React from "react";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${(props) => `rgba(${props.theme.white}, 1)`};
`;

const BigContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  h1 {
    font-size: 50px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
`;

const ServiceContainer = styled.div`
  h2 {
    padding-top: 20px;
    font-size: 30px;
    height: 5rem;
  }
  p {
    margin: 3%;
    padding: 20px;
    font-size: 25px;
  }
  @media (max-width: ${(props) => props.theme.tablet}) {
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 20px;
    }
  }
`;

const Service = () => {
  return (
    <Section className="" data-scroll-section>
      <BigContainer>
        <h1>Services</h1>
        <Container>
          <ServiceContainer>
            <div className="block-1">
              <img src="icon/lightbulb.svg" alt="" />
              <h2>Websites and platforms</h2>
              <p>
                Design and create website along with the customer requests fully
                interactive with mostly every devices
              </p>
            </div>
          </ServiceContainer>

          <ServiceContainer>
            <div className="block-2">
              <img src="icon/lightbulb.svg " alt="" />
              <h2>Mobile application</h2>
              <p>
                Create fully function application separated from the website and
                more addons features
              </p>
            </div>
          </ServiceContainer>

          <ServiceContainer>
            <div className="block-3">
              <img src="icon/lightbulb.svg" alt="" />
              <h2>UI/UX Design</h2>
              <p>
                Analyze the need of customer to perform on the designing section
              </p>
            </div>
          </ServiceContainer>
        </Container>
      </BigContainer>
    </Section>
  );
};

export default Service;
