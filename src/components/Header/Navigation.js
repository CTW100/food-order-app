import { FaShoppingCart } from 'react-icons/fa';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <div className={classes.nav}>
      <h1>React Meals</h1>
      <div className={classes.shop}>
        <FaShoppingCart />
        <span>Your Cart</span>
        <span>3</span>
      </div>
    </div>
  );
};

export default Navigation;
