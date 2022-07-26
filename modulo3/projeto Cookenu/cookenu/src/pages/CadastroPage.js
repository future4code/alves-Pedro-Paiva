import React from 'react'
import useForm from '../hooks/useForm'
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from '../constants/urls'
import { goToFeedPage } from '../routes/Coordinater'
import axios from 'axios'

export default function CadastroPage() {
  const navigate = useNavigate()
  const  [form, onChange, clear] = useForm({name: "", email: "", password: ""})
  
  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
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
    <div>CadastroPage
        <form onSubmit= {onSubmitForm}>
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
          <button type="submit">Cadastrar</button>
        </form>      
    </div>
  )
}
