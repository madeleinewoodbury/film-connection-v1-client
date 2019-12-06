import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const loggedIn = true;
  const userLinks = (
    <Fragment>
      <li>
        <Link to="/discover">
          <i class="fas fa-plus"></i> <span className="hide-md">Discover</span>
        </Link>
      </li>
      <li className="dropdown">
        <Link to="#!" disaled="true" className="drop-btn">
          <i class="fas fa-user"></i> <span className="hide-md">Madeleine</span>
        </Link>
        <div class="dropdown-content">
          <Link to="!#">
            <i class="fas fa-cog"></i> Dashboard
          </Link>
          <Link to="/collections">
            <i class="fas fa-film"></i> My Collections
          </Link>
          <Link to="!#">
            <i class="fas fa-sign-out-alt"></i> Logout
          </Link>
        </div>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
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
    </Fragment>
  );

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <i class="fas fa-film"></i> <span className="hide-md">FC</span>
      </Link>
      {loggedIn && (
        <div className="searchbar">
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      )}

      <ul className="nav-links">{loggedIn ? userLinks : guestLinks}</ul>
    </nav>
  );
};

export default Navbar;
