import React, { Component } from 'react'
import axios from "axios"
import styled from 'styled-components'

const CardUsuario = styled.div`
    margin: 20px;
`
const Cadastrados = styled.div`
    margin: 20px;
    border: 2px solid black;
    width: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
`



export default class Lista extends Component {
  
  state = {
    usuarios: []
  }


    componentDidMount() {
        this.pegarUsuarios()
      }
    
    pegarUsuarios = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {headers:{
          Authorization: "pedro-paiva-alves"
        }})
        .then((resposta) => {
          this.setState({usuarios: resposta.data})
        })
        .catch((erro) => {
          this.setState({erro: erro.response})
        })
      }
    
  
  deletarUsuario = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
           { headers: {
                Authorization: "pedro-paiva-alves"
            }
        })
  
  .then((resposta) => {
    alert("Usuário deletado com sucesso")
    this.pegarUsuarios()
  })
  .catch((erro) => {
    alert("ocorreum erro")
  })
}
  
  
  
  
    render() {
      const listaUsuarios = this.state.usuarios.map((usuario) => {
            return (
             <CardUsuario key={usuario.id} > 
                   {usuario.name} 
                    <button onClick={() => this.deletarUsuario(usuario.id)}>X</button>
                    </CardUsuario>
            )   
      })
    return (
      <div>
         <Cadastrados>
        <button onClick={this.props.irParaCadastro}>Voltar</button>
        <h2>Lista de Usuarios</h2>
        {listaUsuarios}
        </Cadastrados>

      </div>
    )
    }
}
