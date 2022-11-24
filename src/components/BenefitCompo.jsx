import React from "react";
import styled from "styled-components";

const Container = styled.div`

`

const BenefitCompo = ({benefit,detail,svgSrc}) => {
    return (
        <Container>
            <img src={svgSrc} width="50vw" height="50vh" alt="" />
            <h3>{benefit}</h3>
            <p>{detail}</p>
        </Container>
    )
};

export default BenefitCompo;