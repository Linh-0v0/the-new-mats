import styled from "styled-components";
import React from "react";
import ContactForm from "../components/ContactForm";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #f4f4f4;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BigContactContainer = styled.div`
  display: flex;
  padding-top: 1rem;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
  }
`;

const ContainerInfo = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 6rem;
  padding-bottom: 0.6rem;
  color: ${(props) => `rgba(${props.theme.black}, 1)`};
  display: flex;
  flex-direction: column;

  .contact-info-container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding-bottom: 1.5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    padding-top: 3rem;
    font-weight: 700;
  }

  @media (max-width: 920px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    column-gap: 1.9rem;
    padding-left: 0rem;
    h1 {
      padding-top: 2rem;
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  column-gap: 1.3rem;

  img {
    width: 30px;
  }

  p {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontxs};
    text-decoration: underline;
    word-break: break-all;
    white-space: normal;
  }

  img:hover,
  p:hover {
    cursor: pointer;
  }

  @media (max-width: 920px) {
    column-gap: 0.5rem;

    img {
      width: 20px;
    }

    p {
      max-width: 140px;
      font-size: ${(props) => props.theme.fontxxs};
    }
  }
`;

const DesignBy = styled.div`
  color: ${(props) => `rgba(${props.theme.black}, 0.5)`};
  font-size: ${(props) => props.theme.fontxs};
  font-weight: 400;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 0.4rem;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  p {
    font-weight: 400;
  }

  @media (max-width: 920px) {
    font-size: 1rem;
    padding-bottom: 1rem;

    img {
      width: 20px;
    }
  }
`;

const Contact = () => {
  return (
    <Section className="" data-scroll-section id="contact">
      <BigContactContainer>
        <ContainerInfo id="#section1">
          <div className="contact-info-container">
            <h1>CONTACT US</h1>
            <ContactContainer>
              <img src="icons/Email.svg" alt="" />
              <p>thenewmats@gmail.com</p>
            </ContactContainer>
            <ContactContainer>
              <img src="icons/Instagram.svg" alt="" />
              <p>Instagram</p>
            </ContactContainer>
            <ContactContainer>
              <img src="icons/Phone.svg" alt="" />
              <p>0963214785</p>
            </ContactContainer>
          </div>

          <div className="contact-info-container">
            <h1>OUR PROJECT</h1>
            <ContactContainer>
              <img src="icons/github.svg" alt="" />
              <p><a href="https://github.com/Linh-0v0" target="_blank">Github</a></p>
            </ContactContainer>
          </div>
        </ContainerInfo>
        <ContactForm />
      </BigContactContainer>
      <DesignBy>
        <div>
          <img src="icons/Copyright.svg" alt="" />
          <span>2022</span>
        </div>
        <span>|</span>
        <p>Designed by Linh & Nham</p>
      </DesignBy>
    </Section>
  );
};

export default Contact;
