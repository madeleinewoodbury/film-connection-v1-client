import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { getCollectionById } from '../../actions/collections';
import PropTypes from 'prop-types';
import './Collections.css';
import CollectionItem from './CollectionItem';
import Spinner from '../layout/Spinner';

const Collection = ({
  getCollectionById,
  collections: { collection, loading },
  auth: { isAuthenticated, user },
  match
}) => {
  useEffect(() => {
    getCollectionById(match.params.id);
  }, [getCollectionById, match.params.id]);

  const [sortUp, setSortUp] = useState(false);

  const handleSort = e => {
    if (e.target.classList.contains('fa-arrow-up')) {
      setSortUp(true);
      console.log(sortUp);
    } else {
      setSortUp(false);
    }
  };

  return (
    <section className="collection-section">
      {collection === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {isAuthenticated && user.name === collection.user.name && (
            <div className="edit-btn">
              <Link to={`/edit/${collection._id}`} className="btn">
                <i className="fas fa-edit"></i> <span>Edit Collection</span>
              </Link>
            </div>
          )}
          <h1 className="section-title">{collection.title}</h1>
          <div className="collection-info">
            <h4>
              <em>
                {isAuthenticated && user.name === collection.user.name ? (
                  <>
                    Created:{' '}
                    <Moment format="YYYY/MM/DD">{collection.createdAt}</Moment>
                  </>
                ) : (
                  'By: John Doe'
                )}
              </em>
            </h4>
            <p>{collection.description}</p>
          </div>
          {collection.films.length !== 0 ? (
            <div className="collection-form">
              <span>{collection.films.length} films</span>
              <form>
                <div className="form-group">
                  <span>Sort by: </span>
                  <select name="collection">
                    <option value="Date Added">Date Added</option>
                    <option value="Alphabetical">Alphabetical</option>
                    <option value="Year Realeased">Year Released</option>
                    <option value="Watched">Watched</option>
                    <option value="Unwatched">Unwatched</option>
                  </select>
                  <span onClick={e => handleSort(e)}>
                    <i
                      className={
                        sortUp ? 'fas fa-arrow-up active' : 'fas fa-arrow-up'
                      }
                    ></i>
                  </span>
                  <span onClick={e => handleSort(e)}>
                    <i
                      className={
                        sortUp
                          ? 'fas fa-arrow-down'
                          : 'fas fa-arrow-down active'
                      }
                    ></i>
                  </span>
                </div>
              </form>
            </div>
          ) : (
            <h3>No films have been added to this collection</h3>
          )}

          <div className="collections">
            {collection.films.map(film => (
              <CollectionItem
                key={film._id}
                id={film.movieId}
                title={film.title}
                poster={film.poster}
                year={film.year}
                author={collection.user.name}
                isCollection={false}
              />
            ))}
          </div>
        </Fragment>
      )}
    </section>
  );
};

Collection.propTypes = {
  getCollectionById: PropTypes.func.isRequired,
  collections: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  collections: state.collections,
  auth: state.auth
});

export default connect(mapStateToProps, { getCollectionById })(Collection);
