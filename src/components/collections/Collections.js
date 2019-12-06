import React from 'react';
import './Collections.css';
import Collection from './Collection';

const Collections = () => {
  return (
    <section>
      <h1 className="section-title">Your Film Collections</h1>
      <div className="collections">
        <Collection
          poster="https://m.media-amazon.com/images/M/MV5BMmQxNGRkMjYtZTAyMy00MDUyLThiNmYtODI1NTkyNmI0ZTNlXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
          title="British Gems"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            reprehenderit numquam animi!"
          author="Madeleine Woodbury"
          auth={true}
        />
        <Collection
          poster="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          title="Cool Movies"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            reprehenderit numquam animi!"
          author="Madeleine Woodbury"
          auth={true}
        />
      </div>
    </section>
  );
};

export default Collections;
