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
         

          <div>{listaDePosts}</div>
          
       </MainContainer>
       
    ) 
  } 
}

export default App;
