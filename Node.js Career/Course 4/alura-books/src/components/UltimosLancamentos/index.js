import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';

const SecaoLancamentos = styled.section`
    padding: 40px 24px 64px;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Titulo = styled.h2`
    color: #FFF;
    margin-bottom: 24px;
    text-align: center;
`;

const ListaLivros = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    width: 100%;
    justify-items: center;
`;

const CardLivro = styled.article`
    width: 100%;
    max-width: 260px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 16px;
    padding: 16px;
    color: #FFF;
    text-align: center;

    img {
        display: block;
        width: 120px;
        max-width: 100%;
        height: auto;
        margin: 0 auto 12px;
        object-fit: contain;
    }

    p {
        margin: 0;
        font-weight: 600;
    }
`;

function UltimosLancamentos() {
    return (
        <SecaoLancamentos>
            <Titulo>Últimos Lançamentos</Titulo>
            <ListaLivros>
                {livros.map((livro) => (
                    <CardLivro key={livro.id}>
                        <img src={livro.src} alt={livro.nome} />
                        <p>{livro.nome}</p>
                    </CardLivro>
                ))}
            </ListaLivros>
        </SecaoLancamentos>
    );
}

export default UltimosLancamentos;