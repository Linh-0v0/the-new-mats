import React from "react";
import styled from "styled-components";


const BenefitCompo = ({benefit,detail,svgSrc}) => {
    return (
        <div>
            <img src={svgSrc} width="50vw" height="50vh" alt="" />
            <h3>{benefit}</h3>
            <p>{detail}</p>
        </div>
    )
};

export default BenefitCompo;