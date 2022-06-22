import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Tela = styled.div`
  margin: 20px;
  border: 2px solid black;
  width: 300px;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export default class Cadastro extends Component {
    state = {  
        nomeUsuario: "",
        emailUsuario: "",
      
     }
     
novoNomeUsuario = (event) => {
  this.setState({nomeUsuario: event.target.value}) }
    
novoEmailUsuario = (event) => {
  this.setState({emailUsuario: event.target.value}) }

  criarUsuario = () => {
    const novoUsuario = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario  };
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      novoUsuario,
      {
        headers: {
          Authorization: "pedro-paiva-alves"
        }
      }
    )
    .then((resposta) => {
      alert("Cadastro criado com sucesso!");

      this.setState({nome: "", email: ""})
      
    })
    .catch((erro) => {
      alert(erro.response.data.message)
    })
  } 


  render() {
    return (
      <div>
        <Tela>
        <button onClick={this.props.irParaLista}>Ir para lista</button>
        <h2>Novo Cadastro</h2>
        <input
          placeholder='Nome do Usuário'
          value={this.state.nomeUsuario}
          onChange={this.novoNomeUsuario}></input>
        <br/>
        <input
          placeholder='Email do Usuário'
          value={this.state.emailUsuario}
          onChange={this.novoEmailUsuario}></input>
        <br/>
        <button onClick={this.criarUsuario}>Criar</button>
        </Tela>
        
      </div>
    )
  }
}
