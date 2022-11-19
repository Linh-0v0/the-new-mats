import styled from "styled-components";
import React from "react";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;


const ContactContainer = styled.div`
  
`;




const Contact = () => {
    return (
        <Section className="">
            <ContactContainer>
                <h1>Contact</h1>
                    <p>Icon</p>
            </ContactContainer>

        </Section>
    );
};

export default Contact;
