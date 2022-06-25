import { Fragment, useState, useEffect, useRef } from 'react';
import classes from '../static/css/Adicionar.module.css';

const Adicionar = (props) => {
  const box = useRef();
  const data = useRef();
  const alerta = useRef();
  const overlay = document.querySelector('.' + props.overlay);

  const classesBtnUm = [classes.button, classes.btnUm];
  const classesBtnDois = [classes.button, classes.btnDois];
  const classesBox = [classes.box, classes.hidden];
  const classesAlert = [classes.alert, classes.hidden];

  const abrirModal = (evento) => {
    // console.log(evento.target.closest(`.${classes.btnUm}`));
    if (evento.target.closest('.' + classes.btnUm)) {
      box.current.classList.remove(classes.hidden);
      overlay.classList.remove('.' + classes.hidden);
      data.current.valueAsDate = new Date();
      console.log('DOIS');
    }
  };
  const fecharModal = () => {
    overlay.classList.add(classes.hidden);
    box.current.classList.add(classes.hidden);
    alerta.current.classList.add(classes.hidden);
  };

  return (
    <Fragment>
      <div className={classes.index}>
        <div className={classes.card__main}>
          <h2>Escolha uma opção:</h2>
          <div className={classes.group}>
            <button
              id="add"
              onClick={abrirModal}
              className={classesBtnUm.join(' ')}
              value="Adicionar"
            >
              Adicionar
            </button>
            <button className={classesBtnDois.join(' ')}>Consultar</button>
          </div>
        </div>
      </div>

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
