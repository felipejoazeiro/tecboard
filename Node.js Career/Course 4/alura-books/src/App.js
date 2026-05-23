import './App.css';
import Logo from './components/Logo';
import Menu from './components/Menu';
import perfil from './images/perfil.svg';
import sacola from './images/sacola.svg';

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const icones = ['sacola', 'perfil'];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <div className="header-actions">
          <Menu items={textoOpcoes} />
          <ul className='icones'>
            {icones.map((icone, index) => (
              <li key={index} className='options'>
                <img src={icone === 'sacola' ? sacola : perfil} alt={icone} />
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
