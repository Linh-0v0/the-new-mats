import styled from "styled-components";
import React from "react";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;


const ContactContainer = styled.div`
h1 {
    font-size: 50px;
  }
`;




const Contact = () => {
    return (
        <Section className="" data-scroll-section>
            <ContactContainer>
                <h1>Contact</h1>
                
                    <p>Icon</p>
                    <li>
                    <img class="facebook" src = "facebook.svg"/></li>
                    <img class="github" src = "github.svg"/>
                    <img class="gmail" src = "gmail.svg"/>
                    <img class="contact" src = "contact.svg"/>
                    
            </ContactContainer>

        </Section>
    );
};

export default Contact;
