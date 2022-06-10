import React from "react";



class Newmessage extends Component {

  state = {
    mensagens: [
      {nome: "Pedro",
      mensagem: "minha primeira mensagem"
    },
    ],
    valorInputNome: "",
    valorInputMensagem: ""
  };

  adicionaMensagem = () => {
    const novaMensagem= {
      nome: this.state.valorInputNome,
      mensagens: this.state.valorInputMensagem
    }
    const novasMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({mensagens: novasMensagens})
  };

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  };
  onChangeInputMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value})
  }; 



  render() {

    const ListaDeMensagens = this.state.mensagens.map((mensagem) => {
        return ( 
            <p>
              {mensagem.nome} - {mensagem.mensagem}
            </p>

        )
        });

    return (
      <div>
        <form>
        <input
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome} > Seu nome </input>
        <input
          value={this.state.valorInputMensagem}
          onChange={this.onChangeInputMensagem} >Sua mensagem</input>
        <button 
          onClick={this.adicionaMensagem}>   Enviar  </button>
        </form>
        <div>{ListaDeMensagens}</div>
      </div>
    )
  }
}

export default Newmessage;
