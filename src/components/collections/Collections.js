import React from 'react';
import { Link } from 'react-router-dom';
import './Collections.css';
import CollectionItem from './CollectionItem';

const Collections = () => {
  const auth = true;

  return (
    <section className="collections-section">
      {auth && (
        <div className="create-btn">
          <Link to="/create" className="btn">
            <i className="fas fa-plus"></i> <span>New Collection</span>
          </Link>
        </div>
      )}
      <h1 className="section-title">Your Film Collections</h1>
      <div className="collections">
        <CollectionItem
          poster="https://m.media-amazon.com/images/M/MV5BMmQxNGRkMjYtZTAyMy00MDUyLThiNmYtODI1NTkyNmI0ZTNlXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
          title="British Gems"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            reprehenderit numquam animi!"
          author="Madeleine Woodbury"
          auth={auth}
          isCollection
        />
        <CollectionItem
          poster="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          title="Cool Movies"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            reprehenderit numquam animi!"
          author="Madeleine Woodbury"
          auth={auth}
          isCollection
        />
      </div>
    </section>
  );
};

export default Collections;
