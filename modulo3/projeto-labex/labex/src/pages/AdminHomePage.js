
import React, { useEffect, useState } from 'react'
import { goToDetails } from '../routes/Coudinator'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import styled from 'styled-components'

const CardTrip = styled.div`
    background-color: white;
    height: auto;
    width: 300px;
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

    const deleteTrip = (idTrip) => {
      // const token = localStorage.getItem("token")
      // axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alves-pedro-paiva/trips/${idTrip}`,
      // {headers: {
      //   auth: token
      // }}).then((resposta) => {
      //   console.log("exluida", resposta.data)
      // }).catch((erro) => {
      //   console.log(erro.data)
      // })
    }

    const listViagens = viagens.map((viagem) => {
        return (
          <ul>
            <p> LISTA DE VIAGENS</p>
            <CardTrip> 
              <h3>Viagem: {viagem.name}</h3>
              <h5>Quando: {viagem.date}</h5>
            <button onClick={deleteTrip(viagem.id)}> Excluir Viagem</button>
            </CardTrip>
            
          </ul>
        )
    })
    
  return (
    <div> 
      <p>PAGINA DO ADMIN</p>
      {listViagens}
      <button onClick={() => goToDetails (navigate, "admin/trips/list" )} > Detalhes da viagem </button>
    
    
    </div>
  )
}
