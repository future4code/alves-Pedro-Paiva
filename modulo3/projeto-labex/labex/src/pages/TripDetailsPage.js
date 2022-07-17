import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const TripDetailsPage = () => {
  const navigate = useNavigate()
  const [viagem, setViagem] = useState([])
  const id = "22LiyKBFF1ScADw5ERPW" 
// ESSE ID acima TEM QUE VIM DA FUNÇÃO DETALHES, COLOQUEI ESSE FIXO SO PARA TESTAR
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/login")
    }
  }, [])
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alves-pedro-paiva/trip/${id}`, 
    {headers: {
      auth: token,
    }}).then((resposta) => {
      console.log(resposta.data.trip)
      console.log("passei aqui")
      setViagem(resposta.data.trip)
      console.log(viagem)
    })
    }, []) 

    const detailsTrip = viagem.candidates

  return (
    <div>detalhes das viagens
        <div>  {detailsTrip}</div>

    </div>
   
  )
}