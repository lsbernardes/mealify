import classes from '../static/css/Consultar.module.css';
import { useState, useEffect } from 'react';
import { maxReceitas } from './Helpers';

const Pagination = (props) => {
  const style = { marginTop: 'auto' };
  const direita = () => props.handler('direita');
  const esquerda = () => props.handler('esquerda');
  const [pagination, setPagination] = useState({
    estado: props.dele,
    paginaAtual: props.pagina,
    inicio: 1,
    fim: 4,
  });

  const pagNumero = (orientation) => {
    const numeroPaginas = Math.ceil(props.dados.length / maxReceitas);
    if (orientation === 'direita' && pagination.estado) {
      return pagination.paginaAtual === numeroPaginas
        ? ''
        : `página ${pagination.paginaAtual + 1}`;
    } else if (orientation === 'esquerda') {
      return pagination.paginaAtual === 1
        ? ''
        : `página ${pagination.paginaAtual - 1}`;
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
  }, [props.dados, props.pagina, props.visivel]);

  return (
    <div hidden={!props.visivel} style={style}>
      <div className={classes.container__pagination}>
        <div onClick={esquerda} className={classes.pagination__esquerda}>
          {pagNumero('esquerda')}
        </div>
        <div onClick={direita} className={classes.pagination__direita}>
          {pagNumero('direita')}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
