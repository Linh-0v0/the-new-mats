import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

const Section = styled.section`
  position: relative;
  height: auto;
  width: 100vw;
  overflow: hidden;
  background-color: ${(props) => `rgba(${props.theme.white}, 1)`};
  padding-bottom: 6rem;
`;

const BigContainer = styled(motion.div)`
  width: 90%;
  margin: 0 auto;
  padding-top: 3rem;

  display: flex;
  flex-direction: row;
  column-gap: 3rem;

  h1 {
    width: 85%;
    text-align: center;
    font-size: ${(props) => props.theme.font3xl};
  }

  .img-container {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 0.5rem;
    flex-direction: column;
    justify-content: center;
    column-gap: 0rem;
    row-gap: 3rem;

    h1 {
      font-size: ${(props) => props.theme.fontxl};
    }

    .img-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    img {
      width: 80%;
    }
  }
`;

const Instruction = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;

  .note {
    font-size: ${(props) => props.theme.fontxs};
    text-decoration: underline;
    text-align: center;
    padding-right: 3rem;
  }

  a {
    padding-top: 1rem;
    padding-right: 45px;
    align-self: center;
  }

  .go-btn {
    padding: 10px 20px;
    background-color: ${(props) => `rgba(${props.theme.sky}, 0.5)`};
    border-radius: 25%;
    font-size: ${(props) => props.theme.fontmd};
    transition: padding 0.3s;
  }

  .go-btn:hover {
    padding: 15px 25px;
  }

  .detail {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    padding-top: 2rem;
    padding-left: 3rem;
  }

  .detail > div {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    column-gap: 2rem;

    .click-svg {
      width: 5rem;
    }

    img {
      width: 8rem;
    }

    span {
      font-size: ${(props) => props.theme.fontmd};
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;

    .note {
      text-align: center;
      padding-right: 0;
    }

    .go-btn {
      padding: 10px 20px;
      background-color: ${(props) => `rgba(${props.theme.sky}, 0.5)`};
      border-radius: 25%;
      font-size: ${(props) => props.theme.fontsm};
    }

    a {
      padding-top: 0.3rem;
      padding-right: 0px;
    }

    .detail {
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      column-gap: 3.5rem;
      row-gap: 2rem;
    }

    .detail > div {
      column-gap: 1.5rem;

      .click-svg {
        width: 3rem;
      }

      img {
        width: 6rem;
      }

      span {
        font-size: ${(props) => props.theme.fontsm};
        font-weight: 400;
      }
    }
  }
`;

const GameMapSection = () => {
  return (
    <Section data-scroll-section>
      <BigContainer
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.2,
          },
        }}
      >
        <Instruction>
          <h1>Want to visit a town ?</h1>
          <a href="/scene/town">
            <span className="go-btn">Go</span>
          </a>
          <p className="note">
           For PC only !!!
          </p>

          <div className="detail">
            <div>
              <img src="/icons/click.svg" className="click-svg" alt="click" />
              <span>Click to start</span>
            </div>
            <div>
              <img src="/icons/arrow-move.svg" alt="up" />
              <span>Move</span>
            </div>
            <div>
              <img src="/icons/Shift.svg" alt="shift" />
              <span>Run</span>
            </div>
            <div>
              <img src="/icons/Space.svg" alt="space" />
              <span>Jump</span>
            </div>
          </div>
        </Instruction>

        <div className="img-container">
          <img src="/images/map.png" alt="game map" />
        </div>
      </BigContainer>
    </Section>
  );
};

export default GameMapSection;
