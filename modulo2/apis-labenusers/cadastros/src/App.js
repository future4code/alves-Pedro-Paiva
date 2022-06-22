
import React, { Component } from 'react'
import Lista from './components/Lista';
import Cadastro from './components/Cadastro';

export default class App extends Component {

  state = {
   telaAtual: "cadastro"
   }

  escolheTela = () => {
    switch(this.state.telaAtual){
      case "cadastro":
        return <Cadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <Lista irParaCadastro={this.irParaCadastro}/>
        default:
          return <div>pagina erro</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }
  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }


  render() {
    return (
      <div>
        
            {this.escolheTela()}        
       </div>
    )
  }
}
