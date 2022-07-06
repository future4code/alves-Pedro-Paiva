import React, { Component } from 'react'
import MostraPlaylist from './MostraPlaylists'
import AbrirPlaylist from './AbrirPlaylist'

export default class PlaylistManager extends Component {
  
    state = {
        currentPage: "playlists"
    }

    changePage = (currentPage) => {
        this.setState({currentPage: currentPage})
    }
  
    render() {
        const renderCurrentPage = () => {
            if (this.state.currentPage === "playlists"){
            return <MostraPlaylist
                changePage={this.changePage} />
        } else if (this.state.currentPage === "detalhesPlaylist") {
            return <AbrirPlaylist
            changePage={this.changePage} />
        }
        }

    return (
      <div>
            {renderCurrentPage()}
      </div>
    )
  }
}
