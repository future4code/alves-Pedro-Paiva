import React from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { goToLoginPage } from "../routes/Coordinater";

const useProtectPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token) {
           goToLoginPage(navigate) 
        }
    }, [navigate])
}
export default useProtectPage