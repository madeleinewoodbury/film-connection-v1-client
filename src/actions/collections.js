import {
  GET_COLLECTION,
  GET_COLLECTIONS,
  CLEAR_COLLECTIONS,
  COLLECTION_ERROR
} from './types';
import { setAlert } from './alert';
import { loadUser } from './auth';
import axios from 'axios';

// Create a new collection
export const createCollection = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post('/api/v1/collections', formData, config);

    dispatch({
      type: GET_COLLECTION,
      payload: res.data
    });

    dispatch(loadUser);
    dispatch(setAlert('Collection Created', 'success'));
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: COLLECTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update collection
export const updateCollection = (id, formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.put(`/api/v1/collections/${id}`, formData, config);

    dispatch({
      type: GET_COLLECTION,
      payload: res.data
    });
    dispatch(setAlert('Collection Updated', 'success'));

    // Redirect back to recipe
    history.push(`/collection/${id}`);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: COLLECTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all collections
export const getCollections = () => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/collections`);
    dispatch({
      type: GET_COLLECTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COLLECTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get current user's collections
export const getUserCollections = () => async dispatch => {
  dispatch({
    type: CLEAR_COLLECTIONS
  });

  try {
    const res = await axios.get(`/api/v1/collections/me`);
    dispatch({
      type: GET_COLLECTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COLLECTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get collection by id
export const getCollectionById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/collections/${id}`);
    dispatch({
      type: GET_COLLECTION,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COLLECTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
