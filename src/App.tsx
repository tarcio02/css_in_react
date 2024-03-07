import Head from './containers/head'
import Listagem from './containers/listagem'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Head />
        <Listagem />
      </Container>
    </>
  )
}

export default App
