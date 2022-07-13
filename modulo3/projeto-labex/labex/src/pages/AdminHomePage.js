
import React from 'react'
import { goToDetails } from '../routes/Coudinator'
import { useNavigate } from "react-router-dom"

export const AdminHomePage = () => {
  const navigate = useNavigate()
    
  return (
    <div> 
      <p>PAGINA DO ADMIN</p>
      <button onClick={() => goToDetails (navigate, "admin/trips/list" )} > Detalhes da viagem </button>
    
    
    </div>
  )
}
