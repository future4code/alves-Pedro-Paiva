import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    posts: [
      {
          nomeUsuario: "paulinha",
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/200/150'
      },
      {
          nomeUsuario: "Pedro Emanuel",
          fotoUsuario: 'https://ca.slack-edge.com/TLAVDH7C2-U03DWTP445P-5d861460c22e-512',
          fotoPost: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/08/melhores-praias-brasil-garapua-3.jpg'
      },
      {
          nomeUsuario: "Pedro Emanuel",
          fotoUsuario: 'https://ca.slack-edge.com/TLAVDH7C2-U03DWTP445P-5d861460c22e-512',
          fotoPost: 'https://static.vecteezy.com/ti/fotos-gratis/t2/1225648-arranha-ceus-gr%C3%A1tis-foto.jpeg'
      },
      
    ]
  }

  adicionaFoto = () => {
    const novaFoto = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novaFotos = [...this.state.post, novaFoto];
    this.setState({ posts: novaFotos});
  }

onChangeInputNomeUsuario = (event) => {
  this.setState({valorInputNomeUsuario: event.target.value})
}
onChangeInputFotoUsuario = (event) => {
  this.setState({valorInputFotoUsuario: event.target.value})
}
onChangeInputFotoPost = (event) => {
  this.setState({valorInputFotoPost: event.target.value})
}

 render() {

  const listaDePosts = this.state.posts.map((post)=> {
      return (
       <Post
          nomeUsuario={post.nomeUsuario }
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
          />
      );
  } )
    return (
      <MainContainer>
          <form> Adicionar Nova Foto <br/>
            <input
              value={this.state.valorInputNomeUsuario}
              onChange={this.onChangeInputNomeUsuario}
              placeholder={"Nova Foto"}
            />
            <input
              value={this.state.valorInputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
              placeholder={"Nome Usuário"}
            />
            <input
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"Local da foto"}
            />
            <button> Enviar Foto</button>
          </form>

          <div>{listaDePosts}</div>
          
       </MainContainer>
       
    ) 
  } 
}

export default App;
