import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 3.2rem;
  background-color: ${(props) => `rgba(${props.theme.white}, 0.3)`};
  color: #0b1532;
  z-index: 99999;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: 570px) {
    justify-content: center;
  }
`;

const LogoBrand = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  column-gap: 10px;

  img {
    width: 50px;
  }

  h1 {
    font-size: 1.5rem;
    font-family: Cooper Hewitt;
    font-weight: 600;
    letter-spacing: 5px;
  }

  :hover {
    cursor: pointer;
  }

  @media (max-width: 570px) {
    h1 {
      font-size: 1rem;
      padding-right: 5px;
    }
  }
`;

const MiddleDiv = styled.div`
  width: 10%;

  @media (max-width: 570px) {
    width: 0;
  }
`;

const SectionsName = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  column-gap: 2.5rem;

  @media (max-width: 570px) {
    display: none;
  }
`;

const NavBar = () => {
  return (
    <NavContainer className="nav-container">
      <LogoBrand>
        <a href="/">
          <img src="/icons/logo.svg" alt="logo" />
        </a>
        <h1>
          <a href="/">THE NEW MATS</a>
        </h1>
      </LogoBrand>
      <MiddleDiv></MiddleDiv>
      <MiddleDiv></MiddleDiv>
    </NavContainer>
  );
};

export default NavBar;
