import React from 'react'
import styled from 'styled-components'


const TopoHeader = styled.div`
    display: flex;
    justify-content: center;
`

export default function Header(props) {
  return (
    <div>
        <TopoHeader>
        <p>ASTROMATCH</p>
        <button onClick={() => props.trocaPagina("perfil")}> voltar inicio</button>
        <button onClick={() => props.trocaPagina("matches")}> ir para matches</button>
        </TopoHeader>
    </div>
  )
}
