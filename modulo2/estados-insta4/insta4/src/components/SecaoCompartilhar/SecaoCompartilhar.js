import React, { Component } from 'react'

export default class SecaoCompartilhar extends Component {
  render() {
    return <CompartilharContainer>
        <BottonCompartilhar
            button={this.iconeInstagram}
         />  


    </CompartilharContainer>
  }
}


const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {

	}

	onChangeComentario() {

	}

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.props.comentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}