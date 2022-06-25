import classes from '../static/css/Header.module.css';

const Header = () => {
  return (
    <div className={classes.nav}>
      <img alt="My Meal" width="38px" height="38px" className={classes.nav} />
      <h1>
        <a href="index.html" className={classes.href}>
          Minha Comida
        </a>
      </h1>
    </div>
  );
};

export default Header;
