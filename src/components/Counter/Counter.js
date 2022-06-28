import css from './Counter.module.css';
import { useState } from 'react';

function Counter({ counterName, initValue = 0 }) {
  const [counterValue, setCounterValue] = useState(initValue);
  const [hideLabel, setHideLabel] = useState(false);

  function changeCounter(direction) {
    if (direction === 'reset') return setCounterValue(0);
    setCounterValue((prevValue) => {
      if (direction === 'minus') return prevValue - 1;
      return prevValue + 1;
    });
  }

  return (
    <div className={css.wrap}>
      <div className={css.card}>
        {!hideLabel && <h2>{counterName}</h2>}
        <h1>{counterValue}</h1>
        <div className={css.control}>
          <button onClick={changeCounter} className={css.button}>
            Add
          </button>
          <button onClick={() => changeCounter('minus')} className={css.button}>
            Minus
          </button>
          <button onClick={() => changeCounter('reset')} className={css.button}>
            Reset
          </button>
          <button
            onClick={() => setHideLabel((prevState) => !prevState)}
            className={`${css.button} ${css.danger}`}
          >
            {!hideLabel ? 'Hide' : 'Show'} Label
          </button>
        </div>
      </div>
    </div>
  );
}
export default Counter;
