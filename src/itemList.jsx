import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ weapons }) => {
  return (
    <div className="container">
      <h2>Lista de Armas</h2>
      <ul>
        {weapons.map(weapon => (
          <li key={weapon.id}>
            <Link to={`/detalles/${weapon.id}`}>{weapon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
