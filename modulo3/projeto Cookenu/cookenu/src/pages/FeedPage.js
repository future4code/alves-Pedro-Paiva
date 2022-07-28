import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/urls'
import useProtectPage from '../hooks/useProtectPage'
import axios from 'axios'
import styled from 'styled-components'
import { goToAddReceita, goToDetailsPage } from '../routes/Coordinater'
import { useNavigate } from 'react-router-dom'

const ImageRecipie = styled.img`
  width: 100%;
  height: 150px;
`
const CardRecipie = styled.div`
    width: 250px;
    height: 222px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 2px 2px 2px 1px grey;
    border-radius: 5px;
`
const ContainerRecipies = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const NewRecipie = styled.button`
    right: 20px;
    bottom: 20px;
    z-index: 3;
    position: fixed !important;
    color: white;
    background-color: #F27649;
    border-radius: 50%;
    border: none;
    width: 56px;
    height: 56px;
    font-size: 40px;
    `

export default function FeedPage() {
  useProtectPage()
  const token = localStorage.getItem("token")
  const [recipies, setRecipies] = useState([])
  const navigate = useNavigate()

  useEffect (() => {
    axios.get(`${BASE_URL}/recipe/feed`, {headers: {Authorization: token}} )
    .then((response) => {
        setRecipies(response.data)
        console.log(response.data)
        console.log(recipies)
    }).catch((erro) => {
      console.log(erro)
    })
  }, [])

  const onClickCard = (id) => {
    goToDetailsPage(navigate, id )
  }

  const listRecipies = recipies.map((recipie) => {
    return (
      <ul>
        <CardRecipie onClick={() => onClickCard(recipie.recipe_id)} >
           <ImageRecipie src={recipie.image}></ImageRecipie>
           <h3> {recipie.title}</h3>
        </CardRecipie>
      </ul>
    )
  })

  return (
    <div>
        <ContainerRecipies>
          <NewRecipie  onClick={() => goToAddReceita(navigate)}> + </NewRecipie>
        {listRecipies} 
        </ContainerRecipies>
    </div>
  )
}
