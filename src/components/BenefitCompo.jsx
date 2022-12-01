import React from "react";
import styled from "styled-components";

const Container = styled.div`
    grid-row: span 1;                           //Phone
    grid-column: span 4; 
    margin-bottom: 2rem;
    text-align: center;
    
    img {
        margin-bottom: 0rem;
    }
    p {
        font-weight:350;
    }
    @media only screen and (min-width: 768px){              // Tablet
        grid-column: span 2;
        margin-bottom: 3rem;
    }
    @media only screen and (min-width:1080px){              // Desktop
        grid-column: span 1;
        margin-bottom: 5rem;
        text-align: left;
        img {
            margin-bottom: 1rem;
        }
    }
 
`


const BenefitCompo = ({benefit,detail,svgSrc}) => {
    return (
        <Container>
            <img src={svgSrc} width="50rem" height="50rem" alt="Icon image" />
            <h3>{benefit}</h3>
            <p>{detail}</p>
        </Container>
    )
};

export default BenefitCompo;