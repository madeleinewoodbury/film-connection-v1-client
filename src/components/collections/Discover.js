import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCollections } from '../../actions/collections';
import PropTypes from 'prop-types';
import CollectionItem from './CollectionItem';
import Spinner from '../layout/Spinner';
import vhs from '../layout/vhs_vertical.png';
import './Collections.css';

const Discover = ({
  getCollections,
  collections: { collections, loading }
}) => {
  useEffect(() => {
    getCollections();
  }, [getCollections]);

  return (
    <section>
      {collections === [] || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="section-title">Discover Film Collections</h1>
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
              />
            ))}
          </div>
        </Fragment>
      )}
    </section>
  );
};

Discover.propTypes = {
  getCollections: PropTypes.func.isRequired,
  collections: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  collections: state.collections
});

export default connect(mapStateToProps, { getCollections })(Discover);
