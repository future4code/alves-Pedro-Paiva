
import React, { useEffect, useState } from 'react'
import { goToDetails, goToCreateTripPage } from '../routes/Coudinator'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import styled from 'styled-components'

const CardTrip = styled.div`
    background-color: white;
    height: auto;
    width: 300px;
`
const TextAdminPage = styled.p`
    color: white;
`
export const AdminHomePage = () => {
  const navigate = useNavigate()
  const [viagens, setViagens] = useState([])
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/login")
    }
  }, [])
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

    // const deleteTrip = (id) => {
    //   const token = localStorage.getItem("token")
    //   axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alves-pedro-paiva/trips/${id}`,
    //   {headers: {
    //     auth: token
    //   }}).then((resposta) => {
    //     console.log("exluida", resposta)
    //   }).catch((erro) => {
    //     console.log(erro.data)
    //   })
    // }

    const listViagens = viagens.map((viagem) => {
        return (
          <ul>
              <CardTrip> 
              <h3>Viagem: {viagem.name}</h3>
              <h5>Quando: {viagem.date}</h5>
            {/* <button onClick={deleteTrip(viagem.id)}> Excluir Viagem</button> */}
            <button onClick={() => goToDetails (navigate, `admin/trips/${viagem.id}`)} > Detalhes da viagem </button>
            </CardTrip>
            
          </ul>
        )
    })
    
  return (
    <div> 
      <TextAdminPage>PAGINA DO ADMIN</TextAdminPage>
      <TextAdminPage> LISTA DE VIAGENS</TextAdminPage>
      <button onClick={() => goToCreateTripPage (navigate, "admin/trips/create" )}>Criar Nova Viagem </button>
      {listViagens}
      </div>
  )
}
