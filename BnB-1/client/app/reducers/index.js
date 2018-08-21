import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import errorReducer from './errorReducer.js';
import cartReducer from './cartReducer.js';
import productReducer from './productReducer';

export default combineReducers({
  userAuth:userReducer,
  cart:cartReducer,
  errors: errorReducer,
  product:productReducer
});
