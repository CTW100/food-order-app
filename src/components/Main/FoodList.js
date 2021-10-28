import react from 'react';

import Card from '../UI/Card';
import Input from '../UI/Input';

import classes from './FoodList.module.css';

const FoodList = (props) => {
  return (
    <Card className={classes['main-screen']}>
      <div className={classes['order-list']}>
        <div>
          <h1>Sushi</h1>
          <p>Finest fish and veggles</p>
          <p>$22.99</p>
        </div>
        <Input />
      </div>
      <div className={classes['order-list']}>
        <div>
          <h1>Schnitzel</h1>
          <p>A german specialty!</p>
          <p>$16.50</p>
        </div>
        <Input />
      </div>
      <div className={classes['order-list']}>
        <div>
          <h1>Barbecue Burger</h1>
          <p>American, raw, meaty</p>
          <p>$12.99</p>
        </div>
        <Input />
      </div>
      <div className={classes['order-list']}>
        <div>
          <h1>Green Bowl</h1>
          <p>Healthy... and green...</p>
          <p>$18.99</p>
        </div>
        <Input />
      </div>
    </Card>
  );
};

export default FoodList;
