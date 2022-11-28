import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  h3 {
    font-size: ${props => props.theme.fontlg};
    font-weight: 800;
  }
  parag {
    font-size: ${props => props.theme.fontsm};
    font-weight: 200;
  }
`

const InfoDetail = ({title, parag}) => {
  return (
    <Container>
        <h3>{title}</h3>
        <p>{parag}</p>
    </Container>
  )
}

export default InfoDetail