import React from "react";
import styled from "styled-components";

const Container = styled.div`
  h3 {
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 800;
    padding-bottom: 1.4rem;
  }
  p {
    font-size: ${(props) => props.theme.fontxs};
    font-weight: 400;
    line-height: 1.7;
  }
`;

const InfoDetail = ({ charColor, title, parag, linkTitlesDict }) => {
  const getLinkTitlesDict = linkTitlesDict;
  return (
    <Container>
      <h3 style={{color: charColor ?? "#000" }}>{title}</h3>
      <p>{parag ?? ""}</p>
      {/* {linkTitlesDict.map(titleAndLink => {
          return (<span>{titleAndLink.title}<a href={titleAndLink.link}></a></span>)
        }) } */}
      {getLinkTitlesDict?.map((titleAndLink, key) => {
        return (
          <p style={{ fontWeight: "400" }} key={key}>
            {titleAndLink.title}:
            <a style={{ fontWeight: "300", textDecoration: "underline" }} href={titleAndLink.link}>
              <span style={{ paddingLeft: "0.5rem" }}>{titleAndLink.link}</span>
            </a>
          </p>
        );
      })}
    </Container>
  );
};

export default InfoDetail;
