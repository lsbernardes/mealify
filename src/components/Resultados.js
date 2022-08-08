import { Fragment, useRef } from 'react';
import classes from '../static/css/Consultar.module.css';

const Resultado = (props) => {
  const card = useRef()
  let filtrado = false

  const receitas = 0
  const inputClasses = [
    classes.busca__texto,
    classes.card__busca,
    classes.card__siblings,
  ];
  const paginationContainer = [classes.container__pagination, classes.hidden];

  const filtrar = (evento) => {
    const receitasFiltradas = receitas.filter((receita) => {
      return receita.nome.includes(evento.target.value);
    });
    card.busca.innerHTML = '';

    if (!evento.target.value) {
      filtrado = false;
      card.renderReceitas(receitas);
    } else {
      filtrado = true;
      card.renderReceitas(receitasFiltradas);
    }
  }

  return (
    <Fragment>
      <input
        type="text"
        className={inputClasses.join(' ')}
        placeholder="buscar"
        onChange={filtrar}
      ></input>
      <div className={classes.container__receitas} ref={card}></div>
      <div className={paginationContainer.join(' ')}>
        <div className={classes.pagination__esquerda}></div>
        <div className={classes.pagination__direita}></div>
      </div>
    </Fragment>
  );
};

export default Resultado;
