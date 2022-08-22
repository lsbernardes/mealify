import { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import classes from './static/css/index.module.css';
import { recuperarDados } from './components/Helpers';

const App = (props) => {
  const card = [classes.card, classes.receita__card, classes.hidden];
  const overlay = [classes.overlay__card];
  const [overlayMode, setOverlayMode] = useState(false);
  const [state, setState] = useState();

  const toggleOverlay = () => {
    setOverlayMode(!overlayMode);
  };

  useEffect(() => {
    const temp = async () => {
      const data = await recuperarDados();
      setState(data);
    };
    temp();
  }, []);

  return (
    <Fragment>
      <Header />
      <Container
        overlay={classes.overlay__card}
        valueModal={overlayMode}
        toggle={toggleOverlay}
        state={state}
      />

      <div className={card.join(' ')}></div>
      <div
        onClick={toggleOverlay}
        hidden={!overlayMode}
        className={overlay.join(' ')}
      ></div>
    </Fragment>
  );
};

export default App;
