import classes from '../static/css/Consultar.module.css';
import Items from './Items';
// import { useState } from 'react';

const Consultar = (props) => {
  const paginationContainer = [classes.container__pagination, classes.hidden];
  const inputClasses = [
    classes.busca__texto,
    classes.card__busca,
    classes.card__siblings,
  ];
  const receitas = props.state ? props.state : 'Nada';
  let dados = false;

  // const [consulta, setConsulta] = useState(false);
  // const consultarHandler = () => setConsulta(!consulta);

  const filtrar = (evento) => {
    dados = !evento.target.value
      ? receitas
      : receitas.filter((receita) => {
          return receita.nome.includes(evento.target.value);
        });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <input
          type="text"
          className={inputClasses.join(' ')}
          placeholder="buscar"
          onChange={filtrar}
        ></input>
        <Items className={classes.container__receitas} dados={dados} />
        <div className={paginationContainer.join(' ')}>
          <div className={classes.pagination__esquerda}></div>
          <div className={classes.pagination__direita}></div>
        </div>
      </div>
      <div id={classes.voltar} className={classes.image} />
    </div>
  );
};

export default Consultar;
