import styled from "styled-components";
import React from "react";


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
`;

const Service = () => {
    return (
        <Section className="">
            <ServiceContainer>
                <h1>Service</h1>
                    <h2>Websites and platforms</h2>
                    <p>Information</p>
            </ServiceContainer>

        </Section>
    );
};

export default Service;
