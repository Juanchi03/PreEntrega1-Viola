import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Detalles = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const productosRef = firebase.firestore().collection('productos');

    const unsubscribe = productosRef.doc(productId).onSnapshot((doc) => {
      if (doc.exists) {
        const productData = doc.data();
        setProduct(productData);
      } else {
        setProduct(null);
      }
    });

    return () => unsubscribe();
  }, [productId]);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
          <p>{product.description}</p>
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



