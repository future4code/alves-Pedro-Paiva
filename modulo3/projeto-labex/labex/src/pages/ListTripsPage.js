import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToForm } from '../routes/Coudinator'
import { goToHomePage } from '../routes/Coudinator'
import axios from "axios"
import styled from 'styled-components'

const Home = styled.div`
    display: flex;
    gap: 40px;
`
const IdTrip = styled.h2`
    color: white;
`
const CardTrip = styled.div`
    background-color: white;
    height: auto;
    width: 300px;
`
export const ListTripsPage = () => {
  const navigate = useNavigate()
    const [viagens, setViagens] = useState([])

useEffect(() => {
axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips", 
{headers: {
  Authorization: "alves-pedro-paiva",
}}).then((resposta) => {
  console.log(resposta.data.trips)
  setViagens(resposta.data.trips)
  console.log(viagens)
})
}, []) 
const listViagens = viagens.map((viagem) => {
    return (
      // <div>{viagem.name}</div>
      <ul>
        <p> LISTA DE VIAGENS</p>
        <CardTrip> 
          <h3>Viagem: {viagem.name}</h3>
          <h5>{viagem.description}</h5>
          <h5>Quando: {viagem.date}</h5>

        </CardTrip>
        
      </ul>
    )
})

  return (
    <div>
       <Home>
        <button onClick={() => goToHomePage(navigate,"" )}>VOLTAR</button>
        <button onClick={() => goToForm(navigate,"trips/application" )}>INSCREVER NA VIAGEM</button>
        </Home> 
      <p>LISTA DE VIAGENS</p>
          
          {listViagens}
    
   </div>
  )

}