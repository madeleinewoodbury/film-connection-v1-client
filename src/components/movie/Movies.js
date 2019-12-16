import React from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import vhs from '../layout/vhs_vertical.png';
import './Movies.css';

const Movies = ({ movies: { movies, search, loading } }) => {
  const searchResult = movies.map(movie => (
    <Link to={`/movie/${movie.imdbID}`} className="search-result">
      <img
        src={movie.Poster === 'N/A' ? vhs : movie.Poster}
        alt={`${movie.Title} poster`}
      />
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
    </Link>
  ));
  return (
    <section className="movies">
      <h1 className="section-title">Showing search results for {search}</h1>
      {movies === [] || loading ? (
        <Spinner />
      ) : (
        <div className="results">{searchResult}</div>
      )}
    </section>
  );
};

Movies.propTypes = {
  movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Movies);
