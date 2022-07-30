import classes from '../static/css/Container.module.css';
import { Fragment, useState, useRef } from 'react';

import Consultar from './Consultar';
import Escolha from './Escolha';
import Adicionar from './Adicionar';

const Container = (props) => {
  const [modal, modalHandler] = useState(false);

  return (
    <Fragment>
      <div className={classes.container}>
        {!modal && <Escolha modal={modalHandler} toggle={props.toggle} />}
        {modal && <Adicionar modal={modalHandler} toggle={props.toggle} />}
      </div>
    </Fragment>
  );
};

export default Container;
