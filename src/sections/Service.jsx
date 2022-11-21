import styled from "styled-components";
import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const ServiceContainer = styled.div`
  h1 {
    font-size: 50px;
  }

  h2 {
    padding-top: 20px;
    font-size: 30px
  }

  p {
    padding: 20px;
    font-size: 25px;
    margin: 10px auto;

  }
`;

const Service = () => {
    return (
        <Section className=""data-scroll-section>
            <ServiceContainer>
                <h1>Service</h1>
                <i class="fa-regular fa-lightbulb-on"></i>
                    <h2>Websites and platforms</h2>
                      <p>Design and create website along with the customer requests fully interactive with mostly every devices</p>
            </ServiceContainer>

            <ServiceContainer>
                    <h2>Mobile application</h2>
                      <p>Create fully function application separated from the website and more addons features</p>
            </ServiceContainer>

            <ServiceContainer>
                    <h2>UI/UX Design</h2>
                      <p>Analyze the need of customer to perform on the designing section</p>
            </ServiceContainer>

        </Section>
    );
};

export default Service;
