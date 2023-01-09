import classes from '../static/css/Header.module.css';

const Header = () => {
  return (
    <div className={classes.nav}>
      <a href="index.html" className={classes.href}><img alt="My Meal" className={classes.nav} /></a>
      {/* <h1>
        <a href="index.html" className={classes.href}>
          Minha Comida
        </a>
      </h1> */}
    </div>
  );
};

export default Header;
