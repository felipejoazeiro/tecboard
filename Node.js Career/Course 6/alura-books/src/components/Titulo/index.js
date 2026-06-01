import styled from 'styled-components';

const Titulo = styled.h2`
    color: ${(props) => props.color || '#FFF'};
    margin-bottom: 24px;
    text-align: ${(props) => props.align || 'center'};
    font-size: ${(props) => props.size || '24px'};
`;

export default Titulo;
