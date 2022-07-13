import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToForm } from '../routes/Coudinator'
import { goToHomePage } from '../routes/Coudinator'
import axios from "axios"

export const ListTripsPage = () => {
  const navigate = useNavigate()

  // state = {
  //   viagens: [],
  // }

  // getAllTrips = () => {
  //   axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips", 
  //   { headers: {
  //     Authorization:"alves-pedro-paiva"
  //   }}).then((resposta) => {
  //     return this.setState({viagens: resposta.trip.name})
  //   }).catch((erro)=> {
  //     console.log(erro.response)
  //   })
  // }
  return (
    <div>
        <button onClick={() => goToHomePage(navigate,"" )}>VOLTAR</button>
        <button onClick={() => goToForm(navigate,"trips/application" )}>INSCREVER NA VIAGEM</button>
      <p>LISTA DE VIAGENS</p>

        <h3>viagem 1</h3>
        <h3>viagem 2</h3>
        <h3>viagem 3</h3>
     

    </div>
  )
}