import React from 'react'
import useForm from '../hooks/useForm'
import { goToCadastro, goToFeedPage } from '../routes/Coordinater'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import styled from 'styled-components'

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 40vh;
    justify-content: center;
    margin: auto;
    gap: 10px;
`
const CreateTitle = styled.h4`
    font-size: 2rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    text-align: center;
`
const LoginButton= styled.button`
    color: white;
    background-color: #F27649;
    border: none;
    border-radius: 4px;
    height: 30px;
    font-size: 20px;
`
const NewCadastroButton = styled.button`
    color: white;
    background-color: #F27649;
    border: none;
    border-radius: 4px;
    height: 30px;
    font-size: 20px;
    justify-content: center;
`
const LoginTitle = styled.h4`
    font-size: 25px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    text-align: center;
`

export default function LoginPage() {
  const navigate = useNavigate()
  const  [form, onChange, clear] = useForm({email: "", password: ""})
  
  const OnSubmitForm = (event) => {
    event.preventDefault()
    login()
  }

  const login = () => {
    axios.post(`${BASE_URL}/user/login`, form)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      clear()
      goToFeedPage(navigate)
      console.log(response)
    }).catch((erro) => {
      console.log(erro)
    })
  }

  return (
    <div>
        <LoginForm onSubmit={OnSubmitForm}>
            <input
              name={"email"}
              value={form.email}
              onChange={onChange}
              placeholder="email"
              type={"email"}></input>
            <input
              name={"password"}
              value={form.password}
              onChange={onChange}
              placeholder="senha"
              type={"password"}></input>
            <LoginButton type='submit'>  Login </LoginButton>
        </LoginForm>
        <NewCadastroButton onClick={() => goToCadastro(navigate)}> Cadastre-se </NewCadastroButton>
    </div>
  )
}
