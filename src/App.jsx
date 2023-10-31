import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/navbar'; 
import ItemListContainer from './assets/itemlistcontainer'; 
import Detalles from './assets/ItemListDetail';
import weaponsData from './weaponsData'; 
import Checkout from './checkout';
import { CartProvider } from './assets/cartcontext';
import Pagos from './assets/pagos';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Router>
      <CartProvider>
      <div>
        <Navbar addToCart={addToCart} />
        <Routes>
          <Route path="/" element={<ItemListContainer weapons={weaponsData} />} />
          <Route path="/detalles/:weaponId" element={<Detalles cartItems={cart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/pagos" element={<Pagos />} />
        </Routes>
      </div>
      </CartProvider>
    </Router>
  );
};

export default App;
