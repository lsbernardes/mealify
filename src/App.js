import { Fragment, useEffect } from 'react';
import Header from './components/Header/Header';

function App() {
  const principal = true;

  return (
    <Fragment>
      <Header />
      {/* <Container>
        {principal && <Adicionar />}
        {!principal && <Consultar />}
      </Container> */}
    </Fragment>
  );
}

export default App;
