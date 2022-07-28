import React from 'react'
import useForm from '../hooks/useForm'
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from '../constants/urls'
import { goToFeedPage } from '../routes/Coordinater'
import axios from 'axios'
import styled from 'styled-components'

const CreateUserForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 40vh;
    justify-content: center;
    margin: auto;
    gap: 10px;
`
const CreateUserTitle = styled.h4`
    font-size: 2rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    text-align: center;
`
const CreateUserButton = styled.button`
    color: white;
    background-color: #F27649;
    border: none;
    border-radius: 4px;
    height: 30px;
    font-size: 20px;
`

export default function CadastroPage() {
  const navigate = useNavigate()
  const  [form, onChange, clear] = useForm({name: "", email: "", password: ""})
  
  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp()
  }

  const signUp = () => {
    axios.post(`${BASE_URL}/user/signup`, form)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clear()
      goToFeedPage(navigate)
   }).catch((erro) => alert("ERRO"))
  }
  
  return (
    <div>
        <CreateUserForm onSubmit= {onSubmitForm}>
          <CreateUserTitle> Crie um novo usuário</CreateUserTitle>
          <input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Seu Nome"
          type={"name"}></input>
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
          <CreateUserButton type="submit">Cadastrar Usuário</CreateUserButton>
        </CreateUserForm>      
    </div>
  )
}
