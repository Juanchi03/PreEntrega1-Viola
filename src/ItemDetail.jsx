// ItemDetail.jsx
import React, { useState } from 'react';

const ItemQuantitySelection = ({ quantity, handleAdd, handleRemove }) => {
  return (
    <div>
      <h4>Cantidad: {quantity}</h4>
      <button className="btn btn-success mr-2" onClick={handleAdd}>
        Agregar
      </button>
      <button className="btn btn-danger" onClick={handleRemove}>
        Quitar
      </button>
    </div>
  );
};

const Description = ({ description }) => {
  return <p>{description}</p>;
};

const AddItemButton = ({ onAddToCart }) => {
  return <button className="btn btn-primary" onClick={onAddToCart}>Añadir al carrito</button>;
};

const ItemDetail = ({ weapon, description, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const selectedItem = {
      id: weapon.id,
      name: weapon.name,
      quantity: quantity
    };
    onAddToCart(selectedItem);
  };

  return (
    <div className="container">
      <h2>{weapon.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={weapon.image} alt={weapon.name} className="img-fluid" />
          <Description description={description} />
        </div>
        <div className="col-md-6">
          <ItemQuantitySelection
            quantity={quantity}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
          <br />
          <br />
          <AddItemButton onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
