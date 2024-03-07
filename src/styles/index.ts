import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: sans-serif;
`
export const Container = styled.main`
  display: grid;
  grid-template-rows: 30vh 60vh;
  background-color: #363636;

  @media (max-width: 480px) {
    grid-template-rows: 50vh auto;
  }
`

export default EstiloGlobal
