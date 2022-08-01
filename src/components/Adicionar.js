import { Fragment, useState, useEffect, useRef } from 'react';
import classes from '../static/css/Adicionar.module.css';

const Adicionar = (props) => {
  const box = useRef();
  const data = useRef();
  const alerta = useRef();

  const classesBox = [classes.box, classes.hidden];
  const classesAlert = [classes.alert, classes.hidden];

  useEffect(() => {
    box.current.classList.remove(classes.hidden);
    data.current.valueAsDate = new Date();
  });

  const fecharModal = () => {
    box.current.classList.add(classes.hidden);
    alerta.current.classList.add(classes.hidden);
    props.toggle();
  };

  return (
    <Fragment>
      <div ref={box} className={classesBox.join(' ')}>
        <span onClick={fecharModal} className={classes.close}>
          &times;
        </span>
        <h2>Adicionar refeição</h2>
        <div className={classes.boxAdd}>
          <form action="" className={classes.form}>
            <input
              type="text"
              className={classes.nome}
              placeholder="Nome da receita"
            />
            <br />
            <input
              type="date"
              ref={data}
              className={classes.data}
              placeholder="data"
            />
            <br />
            <textarea
              name=""
              id=""
              className={classes.comentario}
              placeholder="Receita, comentário ou observação"
            ></textarea>
            <br />
            <input type="submit" className={classes.submit} value="Adicionar" />
            <div ref={alerta} className={classesAlert.join(' ')}>
              Refeição adicionada!
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Adicionar;
