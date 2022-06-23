import React, { Component } from 'react'
import axios from 'axios'

export default class AbrirPlaylist extends Component {

    state = {
        musicas:[]
    }


mostrarMusicas = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`,
    {headers: {
        Authorization: "pedro-paiva-alves"
    }})
    .then((resposta)=> {
        this.setState({musicas: resposta.data})
    })
    .catch((erro) => {
        this.setState({erro: erro.response})
    })
}


adicionaMusica = () => {
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`,
    {headers: {
        Authorization: "pedro-paiva-alves"
    }})
    
}





  render() {
    const listaDeMusicas = this.state.musicas.map((musica) => {
        return (
            <div>
                {musica.result.tracks.name}
                {musica.result.tracks.artist}
            </div>
        )

    })
    return (
      <div>
         <h3>Adicionar nova musica</h3>   
         <input></input>
         <input></input>
         <input></input>


        <div> {listaDeMusicas}</div>


      </div>
    )
  }
}
