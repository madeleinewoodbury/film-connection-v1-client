import React from 'react';
import './Movie.css';

const Movie = () => {
  return (
    <div className="movie">
      <h1 className="title">Downtown Abbey (2019)</h1>
      <div className="info">
        <span className="rating">PG</span>
        <span className="runtime">122 min</span>
        <span className="genre">Drama, Romance</span>
        <span className="released">20 Sep 2019 (UK)</span>
      </div>
      <div className="content">
        <div className="poster">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMmQxNGRkMjYtZTAyMy00MDUyLThiNmYtODI1NTkyNmI0ZTNlXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
            alt="movie poster"
          />
        </div>
        <div className="about">
          <p className="plot">
            The continuing story of the Crawley family, wealthy owners of a
            large estate in the English countryside in the early 20th century.
          </p>

          <div className="credits">
            <p className="director">
              <strong>Director: </strong>Michael Engler
            </p>
            <p className="writer">
              <strong>Writer: </strong>Julian Fellowes (characters), Julian
              Fellowes (screenplay by)
            </p>
            <p className="stars">
              <strong>Stars: </strong>Matthew Goode, Tuppence Middleton, Maggie
              Smith, Michelle Dockery
            </p>
          </div>
        </div>
      </div>
      <form className="form">
        <div className="form-group">
          <select name="collection">
            <option value="0">Select Collection</option>
            <option value="Watchlist">Watchlist</option>
            <option value="Awesome Movives">Awesome Movies</option>
            <option value="British Gems">British Gems</option>
          </select>
        </div>
        <input type="submit" className="btn" value="Add to Collection" />
      </form>
    </div>
  );
};

export default Movie;
