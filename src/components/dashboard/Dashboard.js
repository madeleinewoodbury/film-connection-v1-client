import React, { Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Dashboard.css';
import PropTypes from 'prop-types';

const Dashboard = ({ auth: { user, loading } }) => {
  return (
    <Fragment>
      {user === null || loading ? (
        <Spinner />
      ) : (
        <section className="dashboard-section">
          <h1 className="section-title">
            Hi {user && user.name.trim().split(' ')[0]}
          </h1>
          <p className="movie-quote">
            “I'm going to make him an offer he can't refuse.” The Godfather,
            1972{' '}
          </p>
          <div className="dashboard-info">
            <p>
              <strong>Collections: </strong>3
            </p>
            <p>
              <strong>Films: </strong>24
            </p>
          </div>
          <div className="dashboard-buttons">
            <Link to="/create" className="btn create">
              <i class="fas fa-plus"></i> <span>New Collection</span>
            </Link>
            <Link to="/" className="btn">
              <i class="fas fa-pen"></i> <span>Change Password</span>
            </Link>
            <Link to="/" className="btn delete">
              <i class="fas fa-trash-alt"></i> <span>Delete Account</span>
            </Link>
          </div>
        </section>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(Dashboard);
