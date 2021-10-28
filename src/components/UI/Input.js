import classes from './Input.module.css';

const Input = () => {
  return (
    <div className={classes['input-form']}>
      <div>
        <label htmlFor='amount'>Amount</label>
        <input type='number' value='1' />
      </div>
      <button>+ Add</button>
    </div>
  );
};

export default Input;
