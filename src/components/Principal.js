import { Fragment, useState, useRef } from 'react';
import Escolha from './Escolha';
import Adicionar from './Adicionar';

const Principal = (props) => {
  const [modal, modalHandler] = useState(false);

  return (
    <Fragment>
      {!modal && <Escolha modal={modalHandler} toggle={props.toggle} />}
      {modal && <Adicionar modal={modalHandler} toggle={props.toggle} />}
    </Fragment>
  );
};

export default Principal;
