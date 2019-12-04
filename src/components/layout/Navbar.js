import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <i class="fas fa-film"></i> Film Collections
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="!#">Discover</Link>
        </li>
        <li>
          <Link to="!#">Login</Link>
        </li>
        <li>
          <Link to="!#">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
