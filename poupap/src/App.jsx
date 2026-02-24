import { Container } from './components/Container'
import { Aside } from './components/Aside'
import { Main } from './components/Main'
import { SearchInput } from './components/SearchInput'

function App() {
  return (
    <Container>
      <Aside/>
      <Main>
        <SearchInput />
      </Main>
    </Container>
  )
}

export default App
