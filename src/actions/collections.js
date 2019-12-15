import { GET_COLLECTION, COLLECTION_ERROR } from './types';
import { setAlert } from './alert';
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
