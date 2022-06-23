import axios from 'axios'
import React, { Component } from 'react'

export default class NewPlaylist extends Component {

  state = {
    nomePlaylist: ""
  }

  

  nomeNovaPlaylist = (event) => {
    this.setState({nomePlaylist: event.target.value})
  }

  criarPlaylist = () => {
    const novaPlaylist = {
      name: this.state.nomePlaylist
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", novaPlaylist,
    {
      headers: {Authorization: "pedro-paiva-alves"}
    })
    .then((resposta) => {
      alert("Playlist criada com sucesso");
      this.setState({name: ""})
    })
    .catch((erro) => {
      alert("erro")
    })

  }

  render() {
    return (
      <div>
        <h3>Nova Playlist</h3>
        <input 
        value={this.state.nomePlaylist}
        onChange={this.nomeNovaPlaylist}
        placeholder='Nome da playlist'></input>
        <button onClick={this.criarPlaylist}>Criar</button>


      </div>
    )
  }
}
