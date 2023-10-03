import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
    image: glock,
  },
  {
    id: 'remington870',
    name: 'Escopeta Remington 870',
    description: 'Una escopeta de acción de bombeo confiable y versátil.',
    image: remington870,
  },
  {
    id: 'mp5',
    name: 'Subfusil MP5',
    description: 'Un subfusil ampliamente utilizado por unidades de fuerzas especiales.',
    image: mp5,
  },
  {
    id: 'awm',
    name: 'Francotirador AWM',
    description: 'Un rifle de francotirador de gran precisión y potencia.',
    image: awm,
  },
  {
    id: 'coltpython',
    name: 'Revólver Colt Python',
    description: 'Un revólver clásico conocido por su precisión y durabilidad.',
    image: coltpython,
  },
];

const Detalles = () => {
  const { weaponId } = useParams();
  const weapon = weaponsData.find(w => w.id === weaponId);

  if (!weapon) {
    return <div>No se encontró el arma</div>;
  }

  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container">
      <h2>{weapon.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={weapon.image} alt={weapon.name} className="img-fluid" />
          <p>{weapon.description}</p>
        </div>
        <div className="col-md-6">
          <h4>Cantidad: {quantity}</h4>
          <button className="btn btn-success mr-2" onClick={handleAdd}>
            Agregar
          </button>
          <button className="btn btn-danger" onClick={handleRemove}>
            Quitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detalles;


