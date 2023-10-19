import React from 'react';

const CartWidget = ({ addToCart }) => {
  return (
    <button onClick={() => addToCart({ /* ...datos del artículo... */ })}>
      <i className="fas fa-shopping-cart"></i>
    </button>
  );
};

export default CartWidget;
