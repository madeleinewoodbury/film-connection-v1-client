import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <h1 className="section-title">Hi Madeleine</h1>
      <p className="movie-quote">
        “I'm going to make him an offer he can't refuse.” The Godfather, 1972{' '}
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
  );
};

export default Dashboard;
