import classes from './Container.module.css';
import Adicionar from '../Adicionar/Adicionar';
import Consultar from '../Consultar/Consultar';

const Container = () => {
  const principal = true;

  return (
    <div class={classes.container}>
      {principal && Adicionar}
      {!principal && Consultar}
    </div>
  );
};

export default Container;
