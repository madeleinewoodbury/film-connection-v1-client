import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const CollectionItem = ({
  poster,
  title,
  description,
  author,
  auth,
  year,
  isCollection,
  id
}) => {
  const [watched, toggleWatced] = useState(false);
  return (
    <div className="collection-item">
      {auth && !isCollection && (
        <div
          className={watched ? 'watched' : 'unwatched'}
          onClick={e => toggleWatced(!watched)}
        >
          <i class={watched ? 'fas fa-check' : 'fas fa-plus'}></i>
        </div>
      )}

      <div className="poster">
        <img src={poster} alt="poster" />
      </div>

      <div className="info">
        <div className="title">
          <h2>{title}</h2>
          {isCollection ? (
            <Fragment>
              {' '}
              <p className="hide-sm">{description}</p>
              <p>
                {auth ? (
                  <small>Created: 12/7/2019</small>
                ) : (
                  <small>Created By: {author}</small>
                )}
              </p>
            </Fragment>
          ) : (
            <Fragment>
              <p>Year Released: {year}</p>
            </Fragment>
          )}
        </div>
        <div className="link">
          {isCollection ? (
            <Link to="/movies" className="btn">
              {auth ? 'View' : 'Explore'}
            </Link>
          ) : (
            <Link to="/movie" className="btn">
              See More
            </Link>
          )}
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

export default CollectionItem;
