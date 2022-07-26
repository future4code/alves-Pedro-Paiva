import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/urls'
import useProtectPage from '../hooks/useProtectPage'
import axios from 'axios'
import styled from 'styled-components'

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

export default function FeedPage() {
  useProtectPage()
  const token = localStorage.getItem("token")
  const [recipies, setRecipies] = useState([])

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

  const listRecipies = recipies.map((recipie) => {
    return (
      <ul>
        <CardRecipie>
           <ImageRecipie src={recipie.image}></ImageRecipie>
           <h3> {recipie.title}</h3>
        </CardRecipie>
      </ul>
    )
  })

  return (
    <div>FeedPage
        <ContainerRecipies>
        {listRecipies}
        </ContainerRecipies>
    </div>
  )
}
