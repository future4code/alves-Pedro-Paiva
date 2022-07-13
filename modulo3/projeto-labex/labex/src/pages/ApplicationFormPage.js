import React from 'react'
import { goToTripsList } from '../routes/Coudinator'
import { useNavigate } from 'react-router-dom'

export const ApplicationFormPage = () =>  {
  const navigate = useNavigate()
  return (
    <div>
      <p>INSCREVA-SE PARA UMA VIAGEM</p>
     
       <form>
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
      </form>
      <button onClick={() => goToTripsList(navigate,"/trips/list" )}> voltar </button>
      <button> enviar </button>
       
       


    </div>
  )
}
