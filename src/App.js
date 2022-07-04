import { Fragment, forwardRef } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import classes from './static/css/index.module.css';

const App = forwardRef((props, ref) => {
  const card = [classes.card, classes.receita__card, classes.hidden];
  const overlay = [classes.overlay__card, classes.hidden];

  return (
    <Fragment>
      <Header />
      <Container overlay={classes.overlay__card} />

      <div className={card.join(' ')}></div>
      <div ref={ref} className={overlay.join(' ')}></div>
    </Fragment>
  );
});

export default App;
