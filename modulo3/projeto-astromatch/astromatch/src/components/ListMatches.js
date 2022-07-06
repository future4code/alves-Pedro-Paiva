import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import styled from 'styled-components'

const FotoMatches = styled.img`
  width: 70px;
  height: 70px;
`
const CardMatch = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  
`





export default function ListMatches() {

  const [nome, setNome] = useState([]);
  const [photo, setPhoto] = useState([]);



 useEffect(() => {
  axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
  .then((resposta) => {
    setNome(resposta.data.profile.name)
    setPhoto(resposta.data.profile.photo)

    console.log(resposta.data)

   
  }).catch ((erro) => {
    console.log(erro.response)
  })
 }, [])



  return (
    <div>     Seus Matches
        <CardMatch>
           <FotoMatches src= {photo} ></FotoMatches>
           <h3>{nome}</h3>
        </CardMatch>        
    </div>
    
  )
}
