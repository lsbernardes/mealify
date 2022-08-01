import classes from '../static/css/Container.module.css';
import { Fragment, useEffect } from 'react';

import Consultar from './Consultar';
import Escolha from './Escolha';
import Adicionar from './Adicionar';

const Container = (props) => {
  useEffect(() => {
    console.log(props.valueModal);
  }, [props.valueModal]);

  return (
    <Fragment>
      <div className={classes.container}>
        {!props.valueModal && (
          <Escolha overlay={props.overlayMode} toggle={props.toggle} />
        )}
        {props.valueModal && <Adicionar toggle={props.toggle} />}
      </div>
    </Fragment>
  );
};

export default Container;
