import styled from "styled-components"
import React from 'react';
import { Router } from './routes/Router';

const Home = styled.div`
background-color: black;
width: 100vw;
height: auto;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.p`
  color: white;
  font-size: 40px;
`
const App = () => {
  return (
    <Home>
        <Title>LABEX VIAGENS ESPACIAIS</Title>
        <Router/>
    </Home>
  );
};
export default App;
