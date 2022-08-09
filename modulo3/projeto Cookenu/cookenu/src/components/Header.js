import React, { useState } from 'react'
import styled from 'styled-components'
import {goToFeedPage, goToLoginPage} from '../routes/Coordinater'
import {useNavigate} from 'react-router-dom'

const HeaderBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
background-color:  #F27649;
width: 100vw;
height: 64px;
align-items: center;
`
const ButtonHeader = styled.button`
 width: auto;
 height: 33px;
 background-color: #F27649;
 border: none;
 border-radius: 25px;
 color: white;
 font-size: 20px;
 :hover {
  background-color: white;
  color:  #F27649
 }

 `

export default function Header() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [rigthButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

    const logout = () => {
      localStorage.removeItem("token")
    }
 
    const rigthButtonAction = () => {
      if (token) {
        logout()
        setRightButtonText("Login")
        goToLoginPage(navigate)
      } else {
        goToLoginPage(navigate)
      }
    }
    return (
    
    <HeaderBar>
        <ButtonHeader onClick={() => goToFeedPage(navigate)}> COOKENU </ButtonHeader>
        <ButtonHeader onClick={rigthButtonAction}> {rigthButtonText} </ButtonHeader>
    </HeaderBar>
  )
}
