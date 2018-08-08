import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import errorReducer from './errorReducer.js';

export default combineReducers({
  userAuth:userReducer,
  errors: errorReducer
});
