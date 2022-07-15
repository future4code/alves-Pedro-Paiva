import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminPage, goToHomePage } from '../routes/Coudinator'
import styled from 'styled-components'

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const DivLogin = styled.div``
const TextLogin = styled.h2`
  color: white;
`

export const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  
  const onSubmitLogin = (event) => {
    event.preventDefault()
    console.log(email, password)
    const body = {
      email: email,
      password: password
    };
    
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/alves-pedro-paiva/login",body
    ).then((response) => {
      console.log(response.data)
      window.localStorage.setItem("token", response.data.token)
      navigate("/admin/trips/list")
    }).catch((erro) => {
      console.log(erro.message)
    })
    
    
  }

  return (
    <DivLogin>
        <TextLogin>Faça o seu LOGIN para acessar a area restrita</TextLogin>
        <FormLogin onSubmit={onSubmitLogin}>
          <input
             placeholder='email'
             type="email"
             value={email}
             onChange={onChangeEmail}></input>
          <input 
             placeholder='password'
             type="password"
             value={password}
             onChange={onChangePassword}></input>
          <button> ENTRAR </button>
        </FormLogin>
        <button onClick={() => goToHomePage(navigate,"" )}>VOLTAR</button>

    </DivLogin>
  )
}