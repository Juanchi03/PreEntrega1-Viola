import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

 
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    calculateTotal();
  }, []);

  const calculateTotal = () => {
    let totalAmount = 0;
    cart.forEach(item => {
      totalAmount += item.quantity;
    });
    setTotal(totalAmount);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    calculateTotal();
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
    setTotal(0);
  }

  const renderBrief = () => {
    if (cart.length === 0) {
      return (
        <div>
          <h2>El carrito está vacío</h2>
        </div>
      );
    }

    return (
      <div>
        <h2>Resumen de la Compra</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - Cantidad: {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <button onClick={clearCart}>Vaciar Carrito</button>
        <button className="btn btn-primary">
          <Link to="/pagos" className="nav-link">Proceder al Pago</Link>
          </button>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {renderBrief()}
        </div>
      </div>
    </div>
  );
};

export default Checkout;


