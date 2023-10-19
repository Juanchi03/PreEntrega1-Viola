import React, { useState } from 'react';

const Checkout = ({ cart }) => {
  const [total, setTotal] = useState(0);

  
  const calculateTotal = () => {
    let totalAmount = 0;
    cart.forEach(item => {
      totalAmount += item.quantity;
    });
    setTotal(totalAmount);
  };

  
  const renderBrief = () => {
    return (
      <div>
        <h2>Resumen de la Compra</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - Cantidad: {item.quantity}
            </li>
          ))}
        </ul>
        <h4>Total: {total}</h4>
      </div>
    );
  };

  
  React.useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {renderBrief()}
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary">Proceder al Pago</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
