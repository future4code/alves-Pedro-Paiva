import React from 'react'
import { goToTripsList } from '../routes/Coudinator'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'

const FormSubscription = styled.form`
    display: flex;
    flex-direction: column;
    gap: 7px;
`
const TextSubscription = styled.h2`
    color: white;
`
const ButtonsForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`
export const ApplicationFormPage = () =>  {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [applicationText, setApplicationText] = useState("")
  const [profession, setProfession] = useState("")
  const [country, setCountry] = useState("")
  const [tripId, setTripId] = useState("")

  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeAge = (event) => {
    setAge(event.target.value)
  }
  const onChangeApplicationText = (event) => {
    setApplicationText(event.target.value)
  } 
   const onChangeProfession = (event) => {
    setProfession(event.target.value)
  }
  const onChangeCountry = (event) => {
    setCountry(event.target.value)
  }
  const onChangeTripId = (event) => {
    setTripId(event.target.value)
  }

    
  const onApplyToTrip = () => {
      const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: "Brasil"
    };
     const id = "22LiyKBFF1ScADw5ERPW"
    
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alves-pedro-paiva/trips/${id}/apply`,body
    ).then((response) => {
      console.log(response.data)
    }).catch((erro) => {
      console.log(erro.message)
    })
 }
  return (
    <div>
      <TextSubscription>INSCREVA-SE PARA UMA VIAGEM</TextSubscription>
     
       <FormSubscription>
        <input 
        placeholder='nome'
        type="name"
        value={name}
        onChange={onChangeName}></input>
        <input 
        placeholder='idade'
        type="number"
        value={age}
        onChange={onChangeAge}></input>
        <input
         placeholder='texto de candidatura'
         type="string"
         value={applicationText}
         onChange={onChangeApplicationText}></input>
        <input 
        placeholder='profissao'
        type="string"
        value={profession}
        onChange={onChangeProfession}
        ></input>
        <select>
          <option>país </option>
        </select>
        <select>
          <option>viagem 1 </option>
          <option> viagem 2 </option>
          <option> viagem 3</option>
          <option> viagem 4</option>
       </select>
        <ButtonsForm>
          <button onClick={() => goToTripsList(navigate,"/trips/list" )}> voltar </button>
          <button onClick={onApplyToTrip()}> enviar </button>
      </ButtonsForm>
       
      </FormSubscription>
     


    </div>
  )
}
