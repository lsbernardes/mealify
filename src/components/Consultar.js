import classes from "../static/css/Consultar.module.css";
import Items from "./Items";
import Pagination from "./Pagination";
import { useState } from "react";

const Consultar = (props) => {
  const inputClasses = [
    classes.busca__texto,
    classes.card__busca,
    classes.card__siblings,
  ];
  const receitas = props.state || "Nada";
  let dados = false;

  const [paginaAtual, setPaginaAtual] = useState(1);

  const filtrar = (evento) => {
    dados = !evento.target.value
      ? receitas
      : receitas.filter((receita) => {
          return receita.nome.includes(evento.target.value);
        });
  };

  const pagHandler = (pagina) => {
    setPaginaAtual(pagina);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <input
          type="text"
          className={inputClasses.join(" ")}
          placeholder="buscar"
          onChange={filtrar}
        ></input>
        <Items
          className={classes.container__receitas}
          dados={dados}
          pagina={paginaAtual}
        />
        <Pagination dados={dados} pagina={paginaAtual} handler={pagHandler} />
      </div>
      {/* <div id={classes.voltar} className={classes.image} /> */}
    </div>
  );
};

export default Consultar;
