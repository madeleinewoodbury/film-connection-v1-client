import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <i class="fas fa-film"></i> <span className="hide-sm">FC</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/login">
            <i class="fas fa-sign-in-alt hide-lg"></i>{' '}
            <span className="hide-sm">Login</span>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <i class="fas fa-user-plus hide-lg"></i>{' '}
            <span className="hide-sm">Register</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
