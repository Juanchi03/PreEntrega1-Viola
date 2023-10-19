import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ addToCart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Mi Tienda</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/">Productos</Link>
          </li>
          <li className="nav-item">
            <Link to="/checkout"> {/* Agregamos un Link al componente Checkout */}
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
