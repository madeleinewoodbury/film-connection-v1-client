import { MOVIE_SEARCH, MOVIE_ERROR } from './types';
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
