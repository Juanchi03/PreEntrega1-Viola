import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './assets/navbar'
import ItemListContainer from './assets/itemlistcontainer'
import Detalles from './assets/ItemListDetail'

const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:weaponId" element={<Detalles />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
