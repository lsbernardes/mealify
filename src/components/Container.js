import classes from '../static/css/Container.module.css';
import { Fragment, useState } from 'react';

import Consultar from './Consultar';
import Escolha from './Escolha';
import Adicionar from './Adicionar';

const Container = (props) => {
  const [consultar, setConsultar] = useState(false);

  const consultarHandler = () => {
    setConsultar(!consultar);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        {!props.valueModal && (
          <Escolha
            overlay={props.overlayMode}
            toggle={props.toggle}
            onConsultar={consultarHandler}
            consultar={consultar}
            hidden={consultar}
          />
        )}
        {props.valueModal && <Adicionar toggle={props.toggle} />}
        {consultar && <Consultar state={props.state} />}
      </div>
    </Fragment>
  );
};

export default Container;
