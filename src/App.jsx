import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/navbar';
import ItemList from './ItemList'; 
import ItemDetailContainer from './ItemDetailContainer'; 
import weaponsData from './weaponsData'; 
import Checkout from './checkout';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Router>
      <div>
        <Navbar addToCart={addToCart} />
        <Routes>
          <Route path="/" element={<ItemList weapons={weaponsData} />} />
          <Route path="/detalles/:weaponId" element={<ItemDetailContainer addToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
