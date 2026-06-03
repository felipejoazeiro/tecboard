import styled from "styled-components";
import InputContainer from "../Input";
import { useState, useEffect } from "react";

import { getLivros } from "../../services/livrosService";

const PesquisaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding: 0 24px;
`;

const PesquisaTopo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;

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
  color: #fff;
  margin-right: 20px;
`;

const Subtitulo = styled.p`
  color: #fff;
  margin-right: 20px;
`;

const ResultadosContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LivroCard = styled.article`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  padding: 16px;
  color: #fff;

  img {
    width: 96px;
    height: auto;
    flex-shrink: 0;
    border-radius: 8px;
    object-fit: cover;
  }

  h3 {
    margin: 0 0 8px;
  }

  p {
    margin: 0 0 8px;
  }

  @media (max-width: 640px) {
    flex-direction: column;

    img {
      width: 72px;
    }
  }
`;

function Pesquisa() {
  const [livroPesquisado, setLivroPesquisado] = useState([]);

  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const livrosData = await getLivros();
        setLivros(livrosData);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchLivros();
  }, []);

  return (
    <PesquisaContainer>
      <PesquisaTopo>
        <Titulo>Encontrar Livros</Titulo>
        <Subtitulo>Encontre os melhores livros para você</Subtitulo>
        <InputContainer
          type="text"
          placeholder="Pesquisar livros..."
          onBlur={(event) => {
            const textoDigitado = event.target.value;
            const resultadoPesquisa = livros.filter((livro) =>
              livro.titulo.toLowerCase().includes(textoDigitado.toLowerCase()),
            );
            setLivroPesquisado(resultadoPesquisa);
            console.log(resultadoPesquisa);
          }}
        />
        <button>Pesquisar</button>
      </PesquisaTopo>

      <ResultadosContainer>
        {livroPesquisado.map((livro) => (
          <LivroCard key={livro.id}>
            <img src={livro.imagem} alt={livro.titulo} />
            <div>
              <h3>{livro.titulo}</h3>
              <p>{livro.autor}</p>
              <p>{livro.descricao}</p>
            </div>
          </LivroCard>
        ))}
      </ResultadosContainer>
    </PesquisaContainer>
  );
}

export default Pesquisa;
