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
display: grid;
grid-template-columns: ;
grid-column-gap: 30px;
  h1 {
    font-size: 50px;
  }

  h2 {
    padding-top: 20px;
    font-size: 30px;
    left: 50%
  }

  p {
    margin: 3%;
    padding: 20px;
    font-size: 25px;
    background-color: lightblue;
    left: 5px;
    top: 3px;
    right: 30px;

  }
  img {
    position: relative ;
  }
`;

const Service = () => {
    return (
        <Section className=""data-scroll-section>
            <ServiceContainer>
                <h1>Service</h1>
              <div class="block-1">  
              <img src="icon/lightbulb.svg" alt="" />
                    <h2>Websites and platforms</h2>
                      <p>Design and create website along with the customer requests fully interactive with mostly every devices</p>
              </div>
            </ServiceContainer>

            <ServiceContainer>
              <div class="block-2">
              <img src="icon/lightbulb.svg" alt="" />
                    <h2>Mobile application</h2>
                      <p>Create fully function application separated from the website and more addons features</p>
              </div>        
            </ServiceContainer>

            <ServiceContainer>
              <div class="block-3">
              <img src="icon/lightbulb.svg" alt="" />
                    <h2>UI/UX Design</h2>
                      <p>Analyze the need of customer to perform on the designing section</p>
              </div>
            </ServiceContainer>

        </Section>
    );
};

export default Service;
