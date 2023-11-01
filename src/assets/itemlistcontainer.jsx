import React from 'react';
import { Link } from 'react-router-dom';
import weaponsData from '../weaponsData'; 

const ItemListContainer = () => {
  return (
    <div className="container">
      <div className="row">
        {weaponsData.map((weapon) => (
          <div key={weapon.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={weapon.image} className="card-img-top" alt={weapon.name} />
              <div className="card-body">
                <h5 className="card-title">{weapon.name}</h5>
                <p className="card-text">{weapon.description}</p>
                <Link to={`/detalles/${weapon.id}`} className="btn btn-primary">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;