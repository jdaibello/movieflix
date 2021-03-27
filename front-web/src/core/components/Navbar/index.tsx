import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
  <nav className="row bg-primary main-nav">
    <Link to="/" className="nav-logo-text">
      <div className="col-2">
        <h4>Movieflix</h4>
      </div>
    </Link>
  </nav>
);

export default Navbar;