import { MOVIE_SEARCH, MOVIE_ERROR, GET_MOVIE } from './types';
import axios from 'axios';

// Search for movie by title
export const searchMovie = (title, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/movies/${title}`);
    dispatch({
      type: MOVIE_SEARCH,
      payload: res.data,
      title
    });
    history.push('/movies');
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get movie by id
export const getMovie = id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/movies/movie/${id}`);
    dispatch({
      type: GET_MOVIE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
