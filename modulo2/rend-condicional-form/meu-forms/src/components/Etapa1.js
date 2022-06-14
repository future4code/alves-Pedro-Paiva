import React, { Component } from 'react'

export default class Etapa1 extends Component {
  render() {
    return (
      <div>
      <h1>ETAPA 1 - DADOS GERAIS</h1>
      <ul>
        <li>
          <h3> 1. Qual o seu nome?</h3>
          <input></input>
        </li>
        <li>
          <h3> 2. Qual sua idade?</h3>
          <input></input>
        </li>
        <li>
          <h3> 3. Qual seu email?</h3>
          <input></input>
        </li>
        <li>
          <h3> 4. Qual a sua escolaridade?</h3>
          <select>
            <option>Ensino Médio Incompleto</option>
            <option>Ensino Médio Completo</option>
            <option>Ensino Superior Incompleto</option>
            <option>Ensino Superior Completo</option>
          </select>
        </li>
      </ul>
    </div>
    )
  }
}


