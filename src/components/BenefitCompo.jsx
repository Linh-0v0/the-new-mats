import React from "react";
import styled from "styled-components";

const stylePara = "font-size: ${(props) => props.theme.fontxxs};line-height: normal";

const BenefitCompo = ({benefit,detail,svgSrc}) => {
    return (
        <div>
            <obj data={svgSrc} width="2vw" hieght="2vh"></obj>
            <h3>{benefit}</h3>
            <p>{detail}</p>
        </div>
    )
};

export default BenefitCompo;