import classes from '../static/css/Adicionar.module.css';
import { Fragment, useEffect } from 'react';

const Escolha = (props) => {
  const classesBtnUm = [classes.button, classes.btnUm];
  const classesBtnDois = [classes.button, classes.btnDois];

  return (
    <div className={classes.index}>
      <div className={classes.card__main}>
        <h2>Escolha uma opção:</h2>
        <div className={classes.group}>
          <button
            id="add"
            onClick={props.toggle}
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
};

export default Escolha;
