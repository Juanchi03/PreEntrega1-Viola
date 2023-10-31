import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import weaponsData from '../weaponsData';
import { useCart } from './cartcontext';

const Detalles = () => {
  const { weaponId } = useParams();
  const { addToCart } = useCart();
  const product = weaponsData.find(item => item.id === weaponId);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: weaponId,
      name: product.name,
      quantity: quantity,
    };

    addToCart(cartItem);

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
          <p>{product.description}</p>
        </div>
        <div className="col-md-6">
          <h4>Cantidad: {quantity}</h4>
          <button className="btn btn-success mr-2" onClick={handleAdd}>
            Añadir
          </button>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detalles;