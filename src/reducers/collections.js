import { GET_COLLECTION, COLLECTION_ERROR } from '../actions/types';

const initialState = {
  collections: [],
  collection: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COLLECTION:
      return {
        ...state,
        collection: payload,
        loading: false
      };
    case COLLECTION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
