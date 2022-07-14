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
export const ListTripsPage = () => {
  const navigate = useNavigate()
    const [viagens, setViagens] = useState([])

useEffect(() => {
axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips", 
{headers: {
  Authorization: "alves-pedro-paiva",
}}).then((resposta) => {
  console.log(resposta.data)
  setViagens(resposta.data.trips.name)
  console.log(viagens)
  

})
}, []) 

  return (
    <div>
       <Home>
        <button onClick={() => goToHomePage(navigate,"" )}>VOLTAR</button>
        <button onClick={() => goToForm(navigate,"trips/application" )}>INSCREVER NA VIAGEM</button>
        </Home> 
      <p>LISTA DE VIAGENS</p>

        <div>
          <ul>
            {/* {viagens.map((viagem) => <li> {viagem}</li>)} */}
          </ul>
          
          <h2></h2>
          <h2></h2>
        </div>
   </div>
  )

}