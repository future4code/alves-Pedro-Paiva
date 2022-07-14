import React from 'react'
import { useNavigate } from "react-router-dom"
import { goToTripsList} from "../routes/Coudinator"
import { goToLoginPage } from '../routes/Coudinator'
import styled from 'styled-components'

const Home = styled.div`
    display: flex;
    gap: 40px;
`
export const HomePage = () => {
    const navigate = useNavigate()
 return (
    <Home>
        <button onClick={() => goToTripsList(navigate,"/trips/list" )}> VER VIAGENS </button>
        <button onClick={() => goToLoginPage(navigate, "login" )}> AREA DE ADMIN</button>
    </Home>
  )
}
