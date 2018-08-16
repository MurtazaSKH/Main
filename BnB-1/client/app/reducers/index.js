import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import errorReducer from './errorReducer.js';
import cartReducer from './cartReducer.js';

export default combineReducers({
  userAuth:userReducer,
  cart:cartReducer,
  errors: errorReducer
});
