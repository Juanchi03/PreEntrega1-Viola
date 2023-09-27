import React from 'react';
import { Link } from 'react-router-dom';
import Detalles from './ItemListDetail';
import glock from './images/glock.jpg';
import mp5 from './images/mp5.jpg';
import awm from './images/awm.jpg';
import remington870 from './images/remington870.jpg';
import coltpython from './images/coltpython.jpg';   

const weaponsData = [
  {
    id: 'glock',
    name: 'Pistola Glock',
    description: 'Una pistola semiautomática popular entre las fuerzas de seguridad.',
    image: glock
  },
  {
    id: 'remington870',
    name: 'Escopeta Remington 870',
    description: 'Una escopeta de acción de bombeo confiable y versátil.',
    image: remington870
  },
  {
    id: 'mp5',
    name: 'Subfusil MP5',
    description: 'Un subfusil ampliamente utilizado por unidades de fuerzas especiales.',
    image: mp5
  },
  {
    id: 'awm',
    name: 'Francotirador AWM',
    description: 'Un rifle de francotirador de gran precisión y potencia.',
    image: awm
  },
  {
    id: 'coltpython',
    name: 'Revólver Colt Python',
    description: 'Un revólver clásico conocido por su precisión y durabilidad.',
    image: coltpython
  },
];

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
                <Link to={`/productos/${weapon.id}`} className="btn btn-primary">
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

