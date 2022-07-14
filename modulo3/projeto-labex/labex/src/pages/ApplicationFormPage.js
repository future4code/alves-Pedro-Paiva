import React from 'react'
import { goToTripsList } from '../routes/Coudinator'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

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
  return (
    <div>
      <TextSubscription>INSCREVA-SE PARA UMA VIAGEM</TextSubscription>
     
       <FormSubscription>
       <select>
          <option>viagem 1 </option>
          <option> viagem 2 </option>
          <option> viagem 3</option>
          <option> viagem 4</option>
       </select>
        <input placeholder='nome'></input>
        <input placeholder='idade'></input>
        <input placeholder='texto de candidatura'></input>
        <input placeholder='profissao'></input>
        <select>
          <option>país </option>
        </select>
        <ButtonsForm>
          <button onClick={() => goToTripsList(navigate,"/trips/list" )}> voltar </button>
          <button> enviar </button>
      </ButtonsForm>
       
      </FormSubscription>
     


    </div>
  )
}
