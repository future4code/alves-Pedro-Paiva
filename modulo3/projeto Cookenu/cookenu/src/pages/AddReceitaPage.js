import React from 'react'
import styled from 'styled-components'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const CreateForm = styled.form`
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
const CreateButton = styled.button`
    color: white;
    background-color: #F27649;
    border: none;
    border-radius: 4px;
    height: 30px;
    font-size: 20px;
`
export default function AddReceitaPage() {
  const navigate = useNavigate()
  const  [form, onChange, clear] = useForm({title: "", description: "", image: ""})
  
  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
    createRecipie()
  }
  const createRecipie = () => {
    axios.post(`${BASE_URL}/recipe`, form, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((response) => {
      alert(response.data.message)
      clear()
    }).catch((erro) => {
      alert(erro.data.message)
    })
  }

  return (
    <div>
        <CreateForm onSubmit={onSubmitForm}>
            <CreateTitle> Adicionar Nova Receita </CreateTitle>
            <input
              name={"title"}
              value={form.title}
              onChange={onChange}
              placeholder="Título"
              ></input>
            <input
              name={"description"}
              value={form.description}
              onChange={onChange}
              placeholder="Descrição"
              ></input>
             <input
              name={"image"}
              value={form.image}
              onChange={onChange}
              placeholder="Foto"
              ></input>
            <CreateButton type='submit'>  Adicionar Receita  </CreateButton>
        </CreateForm>
  </div>
  )
}
