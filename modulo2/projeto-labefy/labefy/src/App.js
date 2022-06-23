import React, { Component } from 'react'
import NewPlaylist from './components/NewPlaylist'
import MostraPlaylists from './components/MostraPlaylists'
import AbrirPlaylist from './components/AbrirPlaylist'

export default class App extends Component {
  render() {
    return (
      <div>LABEFY

          <NewPlaylist></NewPlaylist>
          <MostraPlaylists/>
          <AbrirPlaylist/>




      </div>
       
    )
  }
}
