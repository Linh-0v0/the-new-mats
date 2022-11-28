import styled from "styled-components";
import React from "react";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;


const ContactContainer = styled.div`
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 30vh 30vh;
img{
    position: relative;
    width: 50px;
}

@media (max-width: ${(props) => props.theme.tablet}) {
  h1 {
    font-size: 25px;
  }

}
`;
const BigContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  h1 {
    font-size: 50px;
  }
`;





const Contact = () => {
    return (
        <Section className="" data-scroll-section>
            <BigContainer>
            <h1>Contact</h1>
            <ContactContainer>
                
                <img src="icon/facebook.svg" alt="" />
                <img src="icon/github.svg" alt="" />
                <img src="icon/gmail.svg" alt="" />
                <img src="icon/contact.svg" alt="" />   
            </ContactContainer>
            </BigContainer>

        </Section>
    );
};

export default Contact;
