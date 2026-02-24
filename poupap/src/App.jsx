import { Container } from './components/Container'
import { Aside } from './components/Aside'
import { Main } from './components/Main'
import { SearchInput } from './components/SearchInput'
import { Typography } from './components/Typography'

function App() {
  return (
    <Container>
      <Aside/>
      <Main>
        <SearchInput />
        <Typography variant='h1'>Olá, seja bem-vindo(a)!</Typography>
        <Typography variant='body'>Veja como estão as suas finanças hoje.</Typography>

      </Main>
    </Container>
  )
}

export default App
