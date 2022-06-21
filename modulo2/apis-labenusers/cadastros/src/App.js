import axios from 'axios';
import React, { Component } from 'react'

export default class extends Component {

  state = {

      listaUsuarios: [],
      nomeUsuario: "",
      emailUsuario: "",
      erro: ""
   }




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
      console.log(this.state.listaUsuarios)
      
    })
    .catch((erro) => {
      alert(erro.response.data.message)
    })
  } 

  novoNomeUsuario = (event) => {
    this.setState({nomeUsuario: event.target.value})
  }

  novoEmailUsuario = (event) => {
    this.setState({emailUsuario: event.target.value})
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
      this.setState({usuarios: resposta.data.result.list})
    })
    .catch((erro) => {
      this.setState({erro: erro.response})
    })
  }

  render() {
    return (
      <div>
        <h2>Novo Cadastro</h2>
        <input
          value={this.state.nomeUsuario}
          onChange={this.novoNomeUsuario}></input>
        <br/>
        <input
          value={this.state.emailUsuario}
          onChange={this.novoEmailUsuario}></input>
        <br/>
        <button onClick={this.criarUsuario}>Criar</button>
        <button>Cadastros!</button>

        <div>
        {this.state.erro ? (
          <p>{this.state.erro}</p>
        ) : (
          this.state.listaUsuarios.map((usuario) => {
            return <usuario key={usuario.id} usuario={usuario} />;
          })
        )}
        </div>


      </div>
    )
  }
}
