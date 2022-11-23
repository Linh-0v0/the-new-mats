import React from "react";
import styled from "styled-components";
import BenefitCompo from "../components/BenefitCompo";


const Section = styled.section`
    position: relative
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

const Container = styled.div`
    display: grid; 
    grid-template-columns: 25vw 25vw 25vw 25vw;
    grid-template-rows: 50vh 50vh;
    text-align: center;
    h1 {
        font-family: "Josefin Sans"
        font-size: ${(props) => props.theme.font5xl};
        font-weight: 800;
        text-align: left;
        color: ${(props) => `rgba(${props.theme.black}, 0.2)`};
        grid-column: 1/3;
        grid-row:1/3;
    }    
`;

const Benefits = () => {
    return (
        <Section data-scroll-section>
            <Container>
                <h1>Benefits of working with us</h1>
                
                <BenefitCompo 
                    benefit="Aesthetical"
                    detail="What we can bring to our customer possibly the profound 
                    and creativity in every products which will fill in the need and 
                    requirements of our guests"
                    svgSrc="../icons/GoodLooking.svg"
                />
                <BenefitCompo
                    benefit="Technologies"
                    detail="All the essentials that we use and implement will be the 
                    top notch technologies nowaday to ensure that our and your visitor 
                    will experience the best performance in the product"
                    svgSrc="../icons/Technology.svg"
                />
                <BenefitCompo 
                    benefit="In time and precise"
                    detail="We are highly on schedule with everything and without doubt 
                    your time will be as valueable as ours"
                    svgSrc="../icons/Time.svg"
                />
                <BenefitCompo
                    benefit="Well trained team"
                    detail="With strict filtering and selection our team form with skillful 
                    and professional members who will definitely assure that pleasant of our 
                    customer will always be prioritized"
                    svgSrc="../icons/Teamwork.svg"
                />
            </Container>
        </Section>
    );
};

export default Benefits;