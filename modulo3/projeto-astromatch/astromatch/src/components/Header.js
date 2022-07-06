import React from 'react'

export default function Header(props) {
  return (
    <div>
        <p>ASTROMATCH</p>
        <button onClick={() => props.trocaPagina("perfil")}> voltar inicio</button>
        <button onClick={() => props.trocaPagina("matches")}> ir para matches</button>

    </div>
  )
}
