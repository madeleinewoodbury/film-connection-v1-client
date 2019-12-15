import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CollectionItem = ({
  id,
  title,
  poster,
  description,
  isCollection,
  date,
  year,
  author,
  auth: { isAuthenticated, user }
}) => {
  const [watched, toggleWatched] = useState(false);
  if (description && description.length > 120) {
    description = description.slice(0, 120) + '...';
  }
  return (
    <div className="collection-item">
      {isAuthenticated && !isCollection && (
        <div
          className={watched ? 'watched' : 'unwatched'}
          onClick={e => toggleWatched(!watched)}
        >
          <i class={watched ? 'fas fa-check' : 'fas fa-check'}></i>
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
                {isAuthenticated && user.name === author ? (
                  <small>
                    Created: <Moment format="YYYY/MM/DD">{date}</Moment>
                  </small>
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
            <Link to={`/collection/${id}`} className="btn">
              {isAuthenticated && user.name === author ? 'View' : 'Explore'}
            </Link>
          ) : (
            <Link to={`/movie/${id}`} className="btn">
              See More
            </Link>
          )}
        </div>
      </div>
      {isAuthenticated && user.name === author && (
        <div className="delete">
          <i class="fas fa-trash-alt"></i>
        </div>
      )}
    </div>
  );
};

CollectionItem.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(CollectionItem);
