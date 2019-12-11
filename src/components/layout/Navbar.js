import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { searchMovie } from '../../actions/movies';
import vhs from './vhs.png';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = ({
  auth: { isAuthenticated, loading },
  logout,
  searchMovie,
  history
}) => {
  const [search, setSearchData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    searchMovie(search, history);
  };

  const authLinks = (
    <Fragment>
      <div className="searchbar">
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Search films..."
            name="search"
            value={search}
            onChange={e => setSearchData(e.target.value)}
          />
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
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  searchMovie: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout, searchMovie })(
  withRouter(Navbar)
);
