import classes from '../static/css/Consultar.module.css';
import { useState, useEffect } from 'react';
import { maxReceitas } from './Helpers';

const Pagination = (props) => {
  const paginationContainer = [classes.container__pagination, classes.hidden];
  const [pagination, setPagination] = useState({
    estado: false,
    paginaAtual: props.pagina,
    inicio: 1,
    fim: 4,
  });

  const pagNumero = (orientation) => {
    const numeroPaginas = Math.ceil(props.dados.length / maxReceitas);
    if (orientation === 'direita' && pagination.estado) {
      return pagination.paginaAtual === numeroPaginas
        ? ''
        : `${pagination.paginaAtual + 1}`;
    } else if (orientation === 'esquerda') {
      return pagination.paginaAtual === 1
        ? ''
        : `${pagination.paginaAtual - 1}`;
    } else return '';
  };

  useEffect(() => {
    const inicio = (props.pagina - 1) * maxReceitas;
    const fim = props.pagina * maxReceitas;

    if (props.dados.length > maxReceitas) {
      setPagination({
        estado: true,
        paginaAtual: props.pagina,
        inicio,
        fim,
      });
    }
  }, [props.dados, props.pagina]);

  return (
    <div hidden={pagination.estado} className={paginationContainer.join(' ')}>
      <div className={classes.pagination__esquerda}>
        {pagNumero('esquerda')}
      </div>
      <div className={classes.pagination__direita}>{pagNumero('direita')}</div>
    </div>
  );
};

export default Pagination;
