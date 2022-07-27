import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import AddReceitaPage from '../pages/AddReceitaPage'
import CadastroPage from '../pages/CadastroPage'
import DetailsReceitaPage from '../pages/DetailsReceitaPage'
import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'

export const Router = () =>  {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route index element={<LoginPage/>}></Route>
            <Route path="cadastro" element={<CadastroPage/>}></Route>
            <Route path="feed" element={<FeedPage/>}></Route>
            <Route path="adicionar-receita" element={<AddReceitaPage/>}></Route>
            <Route path="detalhes/:id" element={<DetailsReceitaPage/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

