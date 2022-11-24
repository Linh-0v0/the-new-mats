import styled from "styled-components";
import React from "react";

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;


const ContactContainer = styled.div`
img{
    width: 50px;
}
h1 {
    font-size: 50px;
  }
`;





const Contact = () => {
    return (
        <Section className="" data-scroll-section>
            <ContactContainer>
                <h1>Contact</h1>
                <img src="icon/facebook.svg" alt="" />
                <img src="icon/github.svg" alt="" />
                <img src="icon/gmail.svg" alt="" />
                <img src="icon/contact.svg" alt="" />   
            </ContactContainer>

        </Section>
    );
};

export default Contact;
