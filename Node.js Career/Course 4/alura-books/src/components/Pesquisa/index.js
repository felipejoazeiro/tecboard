import styled from 'styled-components';
import InputContainer from '../Input';

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
    return (
        <PesquisaContainer  >
            <Titulo>Encontrar Livros</Titulo>
            <Subtitulo>Encontre os melhores livros para você</Subtitulo>
            <InputContainer type="text" placeholder="Pesquisar livros..." />
            <button>Pesquisar</button>
        </PesquisaContainer>
    );
}

export default Pesquisa;