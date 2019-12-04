import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        Film Collections
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="!#">Link 1</Link>
        </li>
        <li>
          <Link to="!#">Link 2</Link>
        </li>
        <li>
          <Link to="!#">Link 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
