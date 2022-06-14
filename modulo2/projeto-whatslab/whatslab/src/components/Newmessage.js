import React from "react";


class NewMessage extends React.Component {
  state = {
    mensagens: [
      {
        nome: "",
        mensagem: ""
      }
    ],
    valorInputNome: "",
    valorInputMensagem: ""
  };

  EnviarMensagem = () => {
    const novaMensagem = {
      nome: this.state.valorInputNome,

      mensagem: this.state.valorInputMensagem
    };

    
    const novoMensagens = [...this.state.mensagens, novaMensagem];
    
    this.setState({ mensagens: novoMensagens });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const listaDeMensagens = this.state.mensagens.map((mensagem) => {
      return (
        <p>
          {mensagem.nome} - {mensagem.mensagem}
        </p>
      );
    });

    return (
      <div>
        
        <caixa>
         <div>{listaDeMensagens}</div>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Seu Nome"}
          />
          <input
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Sua Mensagem"}
          />
          <button onClick={this.EnviarMensagem}>Enviar</button>
        </caixa>
      </div>
    );
  }
}

export default NewMessage;
