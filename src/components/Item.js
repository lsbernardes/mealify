const Item = (props) => {
  return (
    <div className={props.className}>
      <p>{props.item.nome}</p>
      <p>{props.item.comentario}</p>
      <p>{props.item.data[0]}</p>
    </div>
  );
};

export default Item;
