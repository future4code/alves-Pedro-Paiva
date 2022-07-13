import React from 'react'
import { useNavigate } from "react-router-dom"
import { goToTripsList} from "../routes/Coudinator"
import { goToLoginPage } from '../routes/Coudinator'

export const HomePage = () => {
    const navigate = useNavigate()
    


   

  return (
    <div>

       


        <button onClick={() => goToTripsList(navigate,"/trips/list" )}> VER VIAGENS </button>
        <button onClick={() => goToLoginPage(navigate, "login" )}> AREA DE ADMIN</button>
    </div>
    
  )
}
