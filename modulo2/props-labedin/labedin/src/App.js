import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U03DWTP445P-5d861460c22e-512" 
          nome="Pedro Emanuel" 
          descricao="Oi, sou Pedro, estudante da LABENU, muito em breve um DEV formado em busca de inserção no mercado de trabalho. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='dados-pessoais'>
        <CardPequeno
          imagem="data:image/png;base64,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"
          tipoDeDado="Email:"
          dados="Pedro_lous@hotmail.com"
          />
        <CardPequeno
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11_2LqDt9vRt7tJNIltMufSY8kljIRJaXVg&usqp=CAU"
          tipoDeDado="Endereço:"
          dados="Mossoró-RN"
        />
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbjo0wQqQ40L5SERzaumJ-qQ12eRgKMOUdg&usqp=CAU" 
          nome="Bee Delivery Tecnologia" 
          descricao="Customer Success e consultor de vendas e relacionamento." 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9SthEkiqRsAulMnibuYkGvMZkfLdshbv6w&usqp=CAU" 
          nome="Hospital Wilson Rosada" 
          descricao="Auxiliar adminstrativo e de faturamento. " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
