import { useState } from "react";

// CSS
import './ItemCount.css';


export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  /* INCREMENT ************** */
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };
  /* ************************ */

  /* DECREMENT ************** */
  const decrement = () => {

    if (count === 1) {
      return setCount(1);
    }
    setCount(count - 1);
  };
  /* ************************ */


  return (
    <>
      <div className="button-container">
        <button className="action-button" onClick={decrement}>-</button>
        <p>{count}</p>
        <button className="action-button" onClick={increment}>+</button>
      </div>

      <br />
      <button className="btn btn-primary" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
  );
};