import './App.css';
import Logo from './components/Logo';
import Menu from './components/Menu';
import IconList from './components/IconList';
import perfil from './images/perfil.svg';
import sacola from './images/sacola.svg';

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const icones = [
  { src: sacola, alt: 'sacola' },
  { src: perfil, alt: 'perfil' },
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <div className="header-actions">
          <Menu items={textoOpcoes} />
          <IconList items={icones} />
        </div>
      </header>
    </div>
  );
}

export default App;
