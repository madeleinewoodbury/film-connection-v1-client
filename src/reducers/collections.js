import {
  GET_COLLECTION,
  GET_COLLECTIONS,
  CLEAR_COLLECTIONS,
  COLLECTION_ERROR
} from '../actions/types';

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
    case GET_COLLECTIONS:
      return {
        ...state,
        collections: payload,
        loading: false
      };
    case COLLECTION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_COLLECTIONS:
      return {
        collections: [],
        collection: null,
        loading: false
      };
    default:
      return state;
  }
}
