import React from 'react'
import useForm from '../hooks/useForm'
import { goToCadastro, goToFeedPage } from '../routes/Coordinater'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../constants/urls'

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
    <div>LoginPage
        <form onSubmit={OnSubmitForm}>
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
            <button type='submit'>  Login </button>
        </form>
        <button onClick={() => goToCadastro(navigate)}> Cadastre-se </button>
    </div>
  )
}
