
import './App.css';
import Header from './components/Header';
import {useState } from 'react'
import Perfis from './components/Perfis';
import ListMatches from './components/ListMatches';
import styled from 'styled-components';



function App() {
  const [paginaAtual, setPaginaAtual] = useState("perfil")


  const trocaPagina = (paginaEscolhida) => {
      setPaginaAtual(paginaEscolhida)
  };

  return (
    <div>
       <Header trocaPagina={trocaPagina}/>
       {paginaAtual === "perfil" ? (<Perfis/>) : (<ListMatches/>)}
    </div>
  );
}

export default App;
