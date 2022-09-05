import classes from '../static/css/Header.module.css';

const Items = (props) => {
  const card = [classes.card__interno, classes.card__siblings];
  const diferData = (data) => {
    const porDia = 1000 * 60 * 60 * 24;
    const dataConv = Date.parse(data);
    const hoje = new Date();
    const dataFinal = Math.floor((hoje - dataConv) / porDia);
    return dataFinal === 1 ? `${dataFinal} dia` : `${dataFinal} dias`;
  };

  return (
    <div className={props.className}>
      {props.dados.map((receita) => {
        const dia = diferData(receita.data);
        return (
          <div
            onClick={() => {
              props.pegarItem(receita._id);
            }}
            className={classes.receita}
            key={receita._id}
          >
            <div className={card.join(' ')}>{receita.nome}</div>
            <div className={card.join(' ')}>{dia}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
