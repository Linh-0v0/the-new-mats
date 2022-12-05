import React from "react";
import styled from "styled-components";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";

const Container = styled(motion.div)`
    grid-row: span 1;                                       //Phone
    grid-column: span 4; 
    margin-bottom: 1rem;
    text-align: center;
    font-size: ${(props) => props.theme.fontxxs};
    p {
        font-weight:350;
    }
    @media only screen and (min-width: ${(props) => props.theme.tablet}){              // Tablet
        grid-column: span 2;
        margin-bottom: 3rem;
    }
    @media only screen and (min-width: ${(props) => props.theme.desktop}){              // Desktop
        grid-column: span 1;
        margin-bottom: 5rem;
        text-align: left;
        font-size: ${(props) => props.theme.fontxs};
        img {
            margin-bottom: 1rem;
        }
    }
 
`


const BenefitCompo = ({benefit,detail,svgSrc,indexOfCompo}) => {
    const compoRef = useRef(null);         
    const isInView = useInView(compoRef,{once:true});           // Only animate once when user first enter the website
    const controls = useAnimationControls();
    useEffect(() => {
        if (isInView) {                                         // Base website: What will the user see 
            controls.start({
               
                x:0, y:0,
                opacity: 1,     
                transition: {
                duration: 2,
                delay: 0.5,
                ease: "easeOut",
                },
            },);
        } else {
            controls.start({                                    // Set up for before animation
                x: indexOfCompo% 2== 0 ? -40 : 40,
                opacity: 0,
            });
        }
    }, [isInView])
    return (
        <Container ref={compoRef}
        whileHover={{scale:1.1}}
        animate={controls}
        >
            <img src={svgSrc} width="50rem" height="50rem" alt="Icon image" />
            <h3>{benefit}</h3>
            <p>{detail}</p>
        </Container>
    )
};

export default BenefitCompo;