import classes from '../static/css/Container.module.css';
import Principal from './Principal';
import Consultar from './Consultar';

const Container = (props) => {
  const principal = true;

  return (
    <div className={classes.container}>
      {principal && <Principal overlay={props.overlay} />}
      {!principal && <Consultar />}
    </div>
  );
};

export default Container;
