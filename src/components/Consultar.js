import classes from '../static/css/Consultar.module.css';
import Items from './Items';
import Pagination from './Pagination';
import { useEffect, useState } from 'react';
import { maxReceitas } from './Helpers';

const Consultar = (props) => {
  const inputClasses = [
    classes.busca__texto,
    classes.card__busca,
    classes.card__siblings,
  ];
  const maxHandler = (pagina) => {
    const inicio = (pagina - 1) * maxReceitas;
    const fim = pagina * maxReceitas;
    return { inicio, fim };
  };

  const [paginaAtual, setPaginaAtual] = useState(1);
  const [filtrado, setFiltrado] = useState(
    props.state.slice(
      maxHandler(paginaAtual).inicio,
      maxHandler(paginaAtual).fim
    )
  );
  const [pagination, setPagination] = useState(true);

  const filtroHandler = (evento, pagina = false) => {
    let dados;
    if (pagina) {
      dados = props.state.slice(
        maxHandler(pagina).inicio,
        maxHandler(pagina).fim
      );
    } else {
      dados = !evento.target.value
        ? props.state
        : props.state.filter((receita) => {
            return receita.nome
              .toLowerCase()
              .includes(evento.target.value.toLowerCase());
          });
    }

    console.log(pagina, dados);
    setFiltrado(dados);
    dados.length <= maxReceitas && !pagina
      ? setPagination(false)
      : setPagination(true);
  };

  const pagHandler = (pagina) => {
    const temp = pagina === 'direita' ? paginaAtual + 1 : paginaAtual - 1;
    setPaginaAtual(temp);
    filtroHandler(false, temp);
  };

  useEffect(() => {
    console.log(paginaAtual);
  }, [paginaAtual]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <input
          type="text"
          className={inputClasses.join(' ')}
          placeholder="buscar"
          onChange={filtroHandler}
        ></input>
        <Items
          className={classes.container__receitas}
          dados={filtrado}
          pagina={paginaAtual}
        />
        <Pagination
          visivel={pagination}
          dados={props.state}
          pagina={paginaAtual}
          handler={pagHandler}
        />
      </div>
      {/* <div id={classes.voltar} className={classes.image} /> */}
    </div>
  );
};

export default Consultar;
