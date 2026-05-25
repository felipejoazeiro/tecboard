import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const LogoImage = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

const LogoText = styled.p`
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1;
    margin: 0;
`;


function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="Logo Alura Books" />
            <LogoText>Alura Books</LogoText>
        </LogoContainer>
    );
}

export default Logo;