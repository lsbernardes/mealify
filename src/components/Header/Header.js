import classes from './Header.module.css';

const Header = () => {
  return (
    <div class={classes.nav}>
      <img alt="My Meal" class={classes.nav} />
      <h1>
        <a href="index.html" class={classes.href}>
          Minha Comida
        </a>
      </h1>
    </div>
  );
};

export default Header;
