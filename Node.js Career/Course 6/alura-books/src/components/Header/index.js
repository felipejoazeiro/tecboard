import Logo from '../Logo';
import Menu from '../Menu';
import IconList from '../IconList';
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const icones = [
  { src: sacola, alt: 'sacola' },
  { src: perfil, alt: 'perfil' },
];

const HeaderContainer = styled.header`
  color: black;
  background-color: white;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding-right: 12px;
  padding-left: 12px;
  box-sizing: border-box;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 12px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderActions>
        <Menu items={textoOpcoes} />
        <IconList items={icones} />
      </HeaderActions>
    </HeaderContainer>
  );
}

export default Header;