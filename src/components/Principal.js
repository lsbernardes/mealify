import { Fragment, useState } from 'react';
import Adicionar from './Adicionar';
import classes from '../static/css/Adicionar.module.css';

const Principal = (props) => {
  const classesBtnUm = [classes.button, classes.btnUm];
  const classesBtnDois = [classes.button, classes.btnDois];
  const [modalAdicionar, modalAdicionarHandler] = useState(false);

  const modalHandler = () => {
    modalAdicionarHandler(true);
  };

  const principalRender = (
    <div className={classes.index}>
      <div className={classes.card__main}>
        <h2>Escolha uma opção:</h2>
        <div className={classes.group}>
          <button
            id="add"
            onClick={modalHandler}
            className={classesBtnUm.join(' ')}
            value="Adicionar"
          >
            Adicionar
          </button>
          <button className={classesBtnDois.join(' ')}>Consultar</button>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      {!modalAdicionar && principalRender}
      {modalAdicionar && <Adicionar overlay={props.overlay} />}
    </Fragment>
  );
};

export default Principal;
