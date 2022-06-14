import React from 'react';
import { Form } from './components/styles';
// import { botao } from './components/styles';
import Etapa1 from './components/Etapa1';

import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import SegundaEtapa from './components/SegundaEtapa';

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

renderizaEtapa = () => {
  switch(this.state.etapa){
    case 1:
      return <Etapa1/>;
    case 2:
      return <SegundaEtapa/>;
    case 3:
      return <Etapa3/>;
    case 4:
      return <Final/>;
  }
};

mudarEtapa = () => {
  this.setState({etapa: this.state.etapa+1})
}

  render() {
    return (
      <Form>
        {this.renderizaEtapa(this.state.etapa)}
        <button onClick={(this.mudarEtapa)} >Próxima etapa </button>
      </Form>
    )
  }
}
