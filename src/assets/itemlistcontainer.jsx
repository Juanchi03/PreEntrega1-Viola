import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

const ItemListContainer = () => {
  const [weaponsData, setWeaponsData] = useState([]);

  useEffect(() => {
    const fetchWeaponsData = async () => {
      const weaponsRef = firebase.firestore().collection('productos');
      const snapshot = await weaponsRef.get();

      const weaponsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setWeaponsData(weaponsData);
    }

    fetchWeaponsData();
  }, []);

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

