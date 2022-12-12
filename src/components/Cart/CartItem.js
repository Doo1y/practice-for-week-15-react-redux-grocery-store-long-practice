import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setItemCount,
  incrementItemCount,
  decrementItemCount,
  removeItem
} from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  useEffect(() => {
    if (count < 1) dispatch(removeItem(item.id));
  });

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) => {
            setCount(parseInt(e.target.value));
            dispatch(setItemCount(e.target.value, item.id));
          }}
        />
        <button
          className="cart-item-button"
          onClick={(e) => dispatch(incrementItemCount(item.id))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={(e) => dispatch(decrementItemCount(item.id))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={(e) => dispatch(removeItem(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
