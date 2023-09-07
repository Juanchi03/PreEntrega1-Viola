import React from 'react';

const CartWidget = () => {
  const cartItemCount = 5; // Número hardcodeado (puedes cambiarlo)

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="badge badge-pill badge-primary">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;
