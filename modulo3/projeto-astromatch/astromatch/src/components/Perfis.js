import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import styled from 'styled-components'
import Header from './Header'

const FotoPerfil = styled.img`
    width: 300px;
    height: 300px;
`

const CardApp = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 398px;
  height: 598px;
`
const CardPerfil = styled.div`

`
const App = styled.div`
  display: flex;
  justify-content: center;
  background-color: gray;
`
const Botao1 = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 1px solid red;
  font-size: 50px;
  color: red;
  :hover {
    background-color: red;
    color: white;
    transform: scale(1.0);}
`
const Botao2 = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 1px solid green;
  font-size: 50px;
  color: green;
  :hover {
    background-color: green;
    color: white;
    transform: scale(1.0);}
`



export default function Perfis() {

  const [nome, setNome] = useState([]);
  const [idade, setIdade] = useState([]);
  const [bio, setBio] = useState([]);
  const [photo, setPhoto] = useState([]);



 useEffect(() => {
  axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
  .then((resposta) => {
    setNome(resposta.data.profile.name)
    setIdade(resposta.data.profile.age)
    setBio(resposta.data.profile.bio)
    setPhoto(resposta.data.profile.photo)

    console.log(resposta.data)

   
  }).catch ((erro) => {
    console.log(erro.response)
  })
 }, [])



  return (
    <App>
        <CardApp>
             <CardPerfil>
                <FotoPerfil src={photo}></FotoPerfil>
                <h3>{nome} {idade}</h3>
                <h4>{bio}</h4>
              </CardPerfil>
        
          <Botao1>X</Botao1> <Botao2>♥️</Botao2>
           {useState}

         </CardApp>
            
         
        
    </App>
    
  )
}
