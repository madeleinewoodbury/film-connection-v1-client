import React from 'react';
import { Link } from 'react-router-dom';

const Collection = ({ poster, title, description, author }) => {
  return (
    <div className="collection">
      <div className="poster">
        <img src={poster} alt="poster" />
      </div>

      <div className="info">
        <div className="title">
          <h2>{title}</h2>
          <p className="hide-sm">{description}</p>
          <p>
            <small>Created By: {author}</small>
          </p>
        </div>
        <div className="link">
          <Link to="!#" className="btn">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collection;
