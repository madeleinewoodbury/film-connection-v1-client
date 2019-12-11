import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import vhs from './vhs.png';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <div className="searchbar">
        <form>
          <input type="text" placeholder="Search films..." />
          <button type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/discover">
            <i class="fas fa-tv"></i> <span className="hide-md">Discover</span>
          </Link>
        </li>
        <li className="dropdown">
          <Link to="#!" disaled="true" className="drop-btn">
            <i class="fas fa-user"></i>{' '}
            <span className="hide-md">Madeleine</span>
          </Link>
          <div class="dropdown-content">
            <Link to="/dashboard">
              <i class="fas fa-cog"></i> Dashboard
            </Link>
            <Link to="/collections">
              <i class="fas fa-film"></i> My Collections
            </Link>
            <Link onClick={logout} to="/">
              <i class="fas fa-sign-out-alt"></i> Logout
            </Link>
          </div>
        </li>
      </ul>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <ul className="nav-links">
        <li>
          <Link to="/discover">
            <i class="fas fa-tv"></i> <span className="hide-md">Discover</span>
          </Link>
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
    </Fragment>
  );

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src={vhs} alt="logo" />
        <span className="hide-md">FC</span>
      </Link>

      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}

      {/* <ul className="nav-links">{loggedIn ? userLinks : guestLinks}</ul> */}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
