import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/Coudinator'

export const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <div>
        <h2>LOGIN</h2>
        <form>
          <input placeholder='email'></input>
          <input placeholder='senha'></input>
          <button onClick={() => goToHomePage(navigate,"" )}>VOLTAR</button>
          <button> entrar </button>

        </form>

    </div>
  )
}