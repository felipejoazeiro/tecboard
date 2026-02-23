import logo from './assets/logo.svg'
import { Container } from './components/Container'
import { Aside } from './components/Aside'

function App() {
  return (
    <Container>
      <Aside>
        <img src={logo} alt="Logo" />
      </Aside>
      <h1>
        Poupapp - O aplicativo de controle financeiro que vai transformar a sua vida!
      </h1>
    </Container>
  )
}

export default App
