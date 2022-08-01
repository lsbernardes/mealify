import { Fragment, useState } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import classes from './static/css/index.module.css';

const App = (props) => {
  const card = [classes.card, classes.receita__card, classes.hidden];
  const overlay = [classes.overlay__card];
  const [overlayMode, setOverlayMode] = useState(false);

  const toggleOverlay = () => {
    console.log(overlayMode);
    setOverlayMode(!overlayMode);
  };

  return (
    <Fragment>
      <Header />
      <Container
        overlay={classes.overlay__card}
        valueModal={overlayMode}
        toggle={toggleOverlay}
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
