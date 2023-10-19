// ItemDetailContainer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import weaponsData from './weaponsData'; 
import weaponsDescription from './weaponsDescription'; 
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ onAddToCart }) => {
  const { weaponId } = useParams();
  const weapon = weaponsData.find(w => w.id === weaponId);

  if (!weapon) {
    return <div>No se encontró el arma</div>;
  }

  const description = weaponsDescription[weaponId];

  return <ItemDetail weapon={weapon} description={description} onAddToCart={onAddToCart} />;
};

export default ItemDetailContainer;

