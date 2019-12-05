import React from 'react';
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
            <button className="btn">Sign Up</button>
            <button className="btn">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
