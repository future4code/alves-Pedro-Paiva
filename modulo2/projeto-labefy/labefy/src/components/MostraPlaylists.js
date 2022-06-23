import React, { Component } from 'react'
import axios from 'axios'

export default class MostraPlaylist extends Component {

    state = {
        playlists: []
    }

componentDidMount() {
    this.getPlaylists()
}

// componentDidUpdate() {
//     this.getPlaylists()
// }

getPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
    {
        headers: {
            Authorization: "pedro-paiva-alves"
        }})
    .then((resposta) => {
        this.setState({playlists: resposta.data.result.list})
        console.log(resposta)
        
    })
    .catch((erro) => {
        this.setState({erro: erro.response})
    })
}

deletaPlaylist = (playlistId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
    {headers: {
        Authorization: "pedro-paiva-alves"
    }})
    .then((resposta) => {
        alert("Playlist excluída!")
        this.getPlaylists()
    })
    .catch((erro) => {
        alert("ocorreu um erro")
    })

}



  render() {
    const listaDePlaylist = this.state.playlists.map((playlist) => {
        return (
            <div>
                {playlist.name}
                <button onClick={() => this.deletaPlaylist(playlist.id)}> Excluir </button>
            </div>
        )
    })


    return (
      <div>
            <div>
                <h2>lista</h2>
                {listaDePlaylist}

            </div>
      </div>
    )
  }
}
