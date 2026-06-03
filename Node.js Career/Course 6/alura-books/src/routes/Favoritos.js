import styled from "styled-components";
import { useEffect, useState } from "react";
import Titulo from "../components/Titulo";
import { getAllFavorites } from "../services/favoritos";

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
  padding: 40px 24px 64px;
  box-sizing: border-box;
`;

const Conteudo = styled.section`
  max-width: 1100px;
  margin: 0 auto;
`;

const ListaFavoritos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  width: 100%;
`;

const CardFavorito = styled.article`
  position: relative;
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  padding: 20px;
  color: #fff;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 auto auto 0;
    width: 72px;
    height: 72px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.22),
      rgba(255, 255, 255, 0)
    );
    border-bottom-right-radius: 72px;
    opacity: 0.8;
  }
`;

const CardTopo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

const Identificador = styled.span`
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-weight: 700;
  flex-shrink: 0;
`;

const Selo = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const NomeLivro = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  line-height: 1.3;
`;

const EstadoVazio = styled.p`
  margin: 32px 0 0;
  color: rgba(255, 255, 255, 0.88);
  text-align: center;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    try {
      const favoritos = await getAllFavorites();
      setFavoritos(favoritos);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <Conteudo>
        <Titulo color="orange">Meus Favoritos</Titulo>
        {favoritos.length > 0 ? (
          <ListaFavoritos>
            {favoritos.map((favorito) => (
              <CardFavorito key={favorito.id}>
                <CardTopo>
                  <Identificador>{favorito.id}</Identificador>
                  <Selo>Favorito</Selo>
                </CardTopo>
                <NomeLivro>{favorito.nome}</NomeLivro>
              </CardFavorito>
            ))}
          </ListaFavoritos>
        ) : (
          <EstadoVazio>Nenhum favorito encontrado.</EstadoVazio>
        )}
      </Conteudo>
    </AppContainer>
  );
}

export default Favoritos;
