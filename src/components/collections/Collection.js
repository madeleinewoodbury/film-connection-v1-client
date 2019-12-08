import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Collections.css';
import CollectionItem from './CollectionItem';

const Collection = () => {
  const auth = true;
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
      {auth && (
        <div className="edit-btn">
          <Link to="/edit" className="btn">
            <i className="fas fa-edit"></i> <span>Edit Collection</span>
          </Link>
        </div>
      )}
      <h1 className="section-title">Cool Movies</h1>
      <div className="collection-info">
        <h4>
          <em>{auth ? 'Created: 12/7/2019' : 'By: John Doe'}</em>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          obcaecati repellendus magni amet similique minus?
        </p>
      </div>
      <div className="collection-form">
        <span>14 films</span>
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
                  sortUp ? 'fas fa-arrow-down' : 'fas fa-arrow-down active'
                }
              ></i>
            </span>
          </div>
        </form>
      </div>
      <div className="collections">
        <CollectionItem
          poster="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          title="The Avengers"
          year="2012"
          isCollection={false}
          auth={auth}
        />
        <CollectionItem
          poster="https://m.media-amazon.com/images/M/MV5BMmQxNGRkMjYtZTAyMy00MDUyLThiNmYtODI1NTkyNmI0ZTNlXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
          title="Downtown Abbey"
          year="2019"
          isCollection={false}
          auth={auth}
        />
      </div>
    </section>
  );
};

export default Collection;
