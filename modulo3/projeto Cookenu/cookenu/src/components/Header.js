import React, { useState } from 'react'
import styled from 'styled-components'
import {goToFeedPage, goToLoginPage} from '../routes/Coordinater'
import {useNavigate} from 'react-router-dom'

const HeaderBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
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
        <button onClick={() => goToFeedPage(navigate)}> COOKENU </button>
        <button onClick={rigthButtonAction}> {rigthButtonText} </button>
    </HeaderBar>
  )
}
