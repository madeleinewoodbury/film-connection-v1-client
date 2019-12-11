import { MOVIE_SEARCH, MOVIE_ERROR } from '../actions/types';

const initialState = {
  movies: [],
  movie: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case MOVIE_SEARCH:
      return {
        ...state,
        movies: payload,
        loading: false
      };
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
