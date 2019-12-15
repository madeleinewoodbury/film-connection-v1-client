import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserCollections } from '../../actions/collections';
import PropTypes from 'prop-types';
import './Collections.css';
import CollectionItem from './CollectionItem';
import Spinner from '../layout/Spinner';
import vhs from '../layout/vhs_vertical.png';

const Collections = ({
  getUserCollections,
  collections: { collections, loading },
  auth: { isAuthenticated }
}) => {
  useEffect(() => {
    getUserCollections();
  }, [getUserCollections]);

  return (
    <section className="collections-section">
      {collections === [] || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {isAuthenticated && (
            <div className="create-btn">
              <Link to="/create" className="btn">
                <i className="fas fa-plus"></i> <span>New Collection</span>
              </Link>
            </div>
          )}
          <h1 className="section-title">Your Film Collections</h1>
          <div className="collections">
            {collections.map(collection => (
              <CollectionItem
                key={collection._id}
                id={collection._id}
                title={collection.title}
                poster={
                  collection.films.length > 0 ? collection.films[0].poster : vhs
                }
                description={collection.description}
                date={collection.createdAt}
                author={collection.user.name}
                isCollection
                auth={isAuthenticated}
              />
            ))}
          </div>
        </Fragment>
      )}
    </section>
  );
};

Collections.propTypes = {
  getUserCollections: PropTypes.func.isRequired,
  collections: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  collections: state.collections,
  auth: state.auth
});

export default connect(mapStateToProps, { getUserCollections })(Collections);
