import React from 'react';
import { removeItem, increase, decrease, addItem } from '../cartSlice';
import { useDispatch } from 'react-redux';

export const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  const decreaseCart = () => {
    if (amount === 1) {
      dispatch(removeItem(id));
    }
    dispatch(decrease({ id }));
  };
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increase({ id }))}
        >
          +
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => decreaseCart()}>
          -
        </button>
      </div>
      <button className="add-btn" onClick={() => dispatch(addItem({ id }))}>
        add to cart
      </button>
    </article>
  );
};
