import React from 'react';
import { Link } from 'react-router-dom';
import vhs from './vhs.png';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-inner">
        <img className="vhs" src={vhs} alt="vhs" />
        <div className="landing-info">
          <h1>Film Collections</h1>
          <div className="btn-container">
            <Link to="/register" className="btn">
              Sign Up
            </Link>
            <Link to="/login" className="btn">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
