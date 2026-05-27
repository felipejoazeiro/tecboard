import styled from 'styled-components';
import InputContainer from '../Input';
import { useState } from 'react';

import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  button {
    padding: 10px;
    border: none;
    border-radius: 0 4px 4px 0;
    background-color: #326589;
    color: white;
    cursor: pointer;
  }
`;

const Titulo = styled.h2`
  color: #FFF;
  margin-right: 20px;
`;

const Subtitulo = styled.p`
  color: #FFF;
  margin-right: 20px;
`;

function Pesquisa() {
    const [livroPesquisado, setLivroPesquisado] = useState([]);

    return (
        <PesquisaContainer  >
            <Titulo>Encontrar Livros</Titulo>
            <Subtitulo>Encontre os melhores livros para você</Subtitulo>
            <InputContainer type="text" placeholder="Pesquisar livros..." onBlur={event => {
              const textoDigitado = event.target.value;
              const resultadoPesquisa = livros.filter(livro => livro.titulo.toLowerCase().includes(textoDigitado.toLowerCase()));
              setLivroPesquisado(resultadoPesquisa);
              console.log(resultadoPesquisa);
            }}/>
            <button>Pesquisar</button>
            <p></p>
        </PesquisaContainer>
    );
}

export default Pesquisa;