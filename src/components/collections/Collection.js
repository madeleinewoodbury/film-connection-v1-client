import React from 'react';
import { Link } from 'react-router-dom';

const Collection = ({ poster, title, description, author, auth }) => {
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
            {auth ? 'View' : 'Explore'}
          </Link>
        </div>
      </div>
      {auth && (
        <div className="delete">
          <i class="fas fa-trash-alt"></i>
        </div>
      )}
    </div>
  );
};

export default Collection;
