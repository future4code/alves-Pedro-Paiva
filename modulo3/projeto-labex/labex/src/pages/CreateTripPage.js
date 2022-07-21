import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const FormsCreate = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const TextCreate = styled.h3`
    color: white;
`

export const CreateTripPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
   const token = localStorage.getItem("token");
        if (token === null) {
          navigate("/login")
        }
 }, [])

    const [nameTrip, setNameTrip] = useState ("")
    const [dateTrip, setDateTrip] = useState ("")
    const [descriptionTrip, setDescriptionTrip] = useState ("")
    const [durationTrip, setDurationTrip] = useState ("")
    const [planetTrip, setPlanetTrip] = useState ("")

const onChangeNameTrip = (event) => {
    setNameTrip(event.target.value)
}
const onChangeDateTrip = (event) => {
    setDateTrip(event.target.value)
}
const onChangeDescriptionTrip = (event) => {
    setDescriptionTrip(event.target.value)
}
const onChangeDurationTrip = (event) => {
    setDurationTrip(event.target.value)
}
const onChangePlanetTrip = (event) => {
    setPlanetTrip(event.target.value)
}
const createTrip = (event) => {
    const token = localStorage.getItem("token")
    event.preventDefault()
    console.log(planetTrip, nameTrip)
    const body = {
      name: nameTrip,
      planet: planetTrip,
      date: dateTrip,
      description: descriptionTrip,
      durationInDays: durationTrip
    };
    
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/alves-pedro-paiva/trips",
    {headers: {
        auth: token
    }},body
    ).then((response) => {
      console.log(response.data)
    }).catch((erro) => {
      console.log(erro.message)
      
    })
    
    
  }



  return (
    <div>
        <TextCreate>Crie uma nova viagem espacial:</TextCreate>
        <FormsCreate>
            <select onChange={onChangePlanetTrip} value={planetTrip}>
                <option label='Escolha um planeta:'></option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Vênus">Vênus</option>
                <option value="Marte">Marte</option>
                <option value="Jupiter">Jupiter</option>
                <option value="Saturno">Saturno</option>
                <option value="Urano">Urano</option>
                <option value="Netuno">Netuno</option>
            </select>
            <input
             placeholder='Nome da Viagem'
             type="name"
             value={nameTrip}
             onChange={onChangeNameTrip}></input>
            <input
             type="date"
             value={dateTrip}
             onChange={onChangeDateTrip}></input>
            <input
             placeholder='Descrição da viagem'
             type="text"
             value={descriptionTrip}
             onChange={onChangeDescriptionTrip}></input>
             <input
             placeholder='Duração'
             type="number"
             value={durationTrip}
             onChange={onChangeDurationTrip}></input>
             <button onClick={createTrip}>Criar Viagem</button>
        </FormsCreate>
    </div>
  )
}
