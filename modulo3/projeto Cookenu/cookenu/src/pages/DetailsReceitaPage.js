import React, { useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'
import useProtectPage from '../hooks/useProtectPage'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import styled from 'styled-components'

const ContainerRicipie = styled.div`
    display: flex;
    justify-content: center;
`
const CardRecipe = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    max-width: 600px;
    min-width: 300px;
    justify-content: center;
    margin-top: 30px;
`
const TitleRecipie = styled.h3`
    color:  #F27649;
    font-size: 1.5rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    text-align: center;
    `
const DescriptionRecipie = styled.h4`
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    text-align: center;
`
const ImageRecipie = styled.img`
    border-radius: 10px;
`

export default function DetailsReceitaPage() {
  useProtectPage()
  const token = localStorage.getItem("token")
  const params = useParams()
  const [recipie, setRecipie] = useState([])


  useEffect (() => {
    axios.get(`${BASE_URL}/recipe/${params.id}`, {headers: {Authorization: token}} )
    .then((response) => {
        setRecipie(response.data[0])
    }).catch((erro) => {
      console.log(erro)
    })
  }, [])

  return (
    <ContainerRicipie> 
      <CardRecipe>
         <ImageRecipie src={recipie.image}></ImageRecipie>
         <TitleRecipie> {recipie.title} </TitleRecipie>
         <DescriptionRecipie> {recipie.description} </DescriptionRecipie>
      </CardRecipe>
  
    </ContainerRicipie>
  )
}
