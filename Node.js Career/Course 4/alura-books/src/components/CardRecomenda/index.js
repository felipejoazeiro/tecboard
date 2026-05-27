
import styled from 'styled-components';

const CardContainer = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    width: min(100%, 920px);
    margin-top: 40px;
    padding: 24px 28px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: #FFF;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;

    h3,
    h4,
    p {
        margin: 0;
    }

    h3 {
        font-size: 1.5rem;
        line-height: 1.2;
    }

    h4 {
        font-size: 1rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.82);
    }

    p {
        max-width: 42ch;
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.5;
    }
`;

const Imagem = styled.img`
    width: 180px;
    max-width: 40%;
    height: auto;
    object-fit: contain;
    flex-shrink: 0;

    @media (max-width: 768px) {
        width: 140px;
        max-width: 100%;
    }
`;

function CardRecomenda({titulo, subtitulo, descricao, imagem}) {
    return (
        <CardContainer>
            <Conteudo>
                <h3>{titulo}</h3>
                <h4>{subtitulo}</h4>
                <p>{descricao}</p>
            </Conteudo>
            <Imagem src={imagem} alt={titulo} />
        </CardContainer>
     );
}

export default CardRecomenda;