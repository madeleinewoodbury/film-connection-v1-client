import React from 'react';
import CollectionItem from './CollectionItem';
import './Collections.css';

const Discover = () => {
  return (
    <section>
      <h1 className="section-title">Discover Film Collections</h1>
      <div className="collections">
        <CollectionItem
          poster="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          title="Cool Movies"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          obcaecati repellendus magni amet similique minus?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Repudiandae obcaecati repellendus
          magni amet similique minus?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repudiandae obcaecati repellendus magni amet
          similique minus?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repudiandae obcaecati repellendus magni amet similique minus?"
          author="John Doe"
          auth={false}
          isCollection
        />
        <CollectionItem
          poster="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          title="Cool Movies"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati repellendus magni amet similique minus?Lorem ipsum dolor sit amet conse"
          author="John Doe"
          auth={false}
          isCollection
        />
        <CollectionItem
          poster="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          title="Cool Movies"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            reprehenderit numquam animi!"
          author="John Doe"
          auth={false}
          isCollection
        />
        <CollectionItem
          poster="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          title="Cool Movies"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            reprehenderit numquam animi!"
          author="John Doe"
          auth={false}
          isCollection
        />
      </div>
    </section>
  );
};

export default Discover;
