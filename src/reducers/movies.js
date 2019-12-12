import { MOVIE_SEARCH, GET_MOVIE, MOVIE_ERROR } from '../actions/types';

const initialState = {
  movies: [],
  movie: null,
  search: '',
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: payload,
        loading: false
      };
    case MOVIE_SEARCH:
      return {
        ...state,
        movies: payload,
        search: action.title,
        loading: false
      };
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
        search: '',
        loading: false
      };
    default:
      return state;
  }
}
