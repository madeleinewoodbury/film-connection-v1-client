import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import movies from './movies';
import collections from './collections';

export default combineReducers({ alert, auth, movies, collections });
