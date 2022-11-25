import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
    position: relative;
    overflow: auto;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;

    h1 {
        font-size: 3rem;
        padding-bottom: 2rem;
    }

    h2 {
        font-size: 2rem;
        padding-bottom: 1rem;
    }
`

const IndividualInfo = () => {
  return (
    <Section>
        <Container>
            <h1>Individual Info</h1>
            <h2>Strength</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, error nam nobis quos quaerat eaque ea ab incidunt velit ipsum itaque quia voluptatibus impedit maxime dolore, nostrum ratione culpa enim?</p>
        </Container>
    </Section>
  )
}

export default IndividualInfo