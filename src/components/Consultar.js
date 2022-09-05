import classes from '../static/css/Consultar.module.css';
import Items from './Items';
import Item from './Item';
import Pagination from './Pagination';
import { useState } from 'react';
import { maxReceitas, maxHandler } from './Helpers';

const Consultar = (props) => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [filtrado, setFiltrado] = useState(
    props.state.slice(
      maxHandler(paginaAtual).inicio,
      maxHandler(paginaAtual).fim
    )
  );
  const [pagination, setPagination] = useState(true);
  const [ItemVisible, setItemVisible] = useState(false);
  const inputClasses = [
    classes.busca__texto,
    classes.card__busca,
    classes.card__siblings,
  ];
  const [itemSingular, setItemSingular] = useState();

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

  const carregarItem = (key) => {
    const itemData = filtrado.filter((receita) => {
      return receita._id === key && receita;
    });
    setItemVisible(true);
    setItemSingular(itemData[0]);
  };

  return (
    <div className={classes.wrapper}>
      {!ItemVisible && (
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
            pegarItem={carregarItem}
          />
          <Pagination
            visivel={pagination}
            dados={props.state}
            pagina={paginaAtual}
            handler={pagHandler}
          />
        </div>
      )}
      {ItemVisible && <Item className={classes.card} item={itemSingular} />}
      {/* <div id={classes.voltar} className={classes.image} /> */}
    </div>
  );
};

export default Consultar;
