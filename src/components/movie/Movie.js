import React, { useEffect, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import vhs from '../layout/vhs_vertical.png';
import './Movie.css';
import { connect } from 'react-redux';
import { getMovie } from '../../actions/movies';
import PropTypes from 'prop-types';

const Movie = ({
  movies: { movie, loading },
  getMovie,
  auth: { isAuthenticated },
  match
}) => {
  useEffect(() => {
    getMovie(match.params.id);
  }, [getMovie, match.params.id]);
  return (
    <Fragment>
      {movie === null || loading ? (
        <Spinner />
      ) : (
        <div className="movie">
          <h1 className="title">
            {movie.Title} ({movie.Year})
          </h1>
          <div className="info">
            <span className="rating">{movie.Rated}</span>
            <span className="runtime">{movie.Runtime}</span>
            <span className="genre">{movie.Genre}</span>
            <span className="released">
              {movie.Released} ({movie.Country})
            </span>
          </div>
          <div className="content">
            <div className="poster">
              <img
                src={movie.Poster === 'N/A' ? vhs : movie.Poster}
                alt={`${movie.Title} poster`}
              />
            </div>
            <div className="about">
              <p className="plot">{movie.Plot}</p>

              <div className="credits">
                <p className="director">
                  <strong>Director: </strong>
                  {movie.Director}
                </p>
                <p className="writer">
                  <strong>Writer: </strong>
                  {movie.Writer}
                </p>
                <p className="stars">
                  <strong>Stars: </strong>
                  {movie.Actors}
                </p>
              </div>
            </div>
          </div>
          {isAuthenticated && (
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
          )}
        </div>
      )}
    </Fragment>
  );
};

Movie.propTypes = {
  getMovie: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies,
  auth: state.auth
});

export default connect(mapStateToProps, { getMovie })(Movie);
