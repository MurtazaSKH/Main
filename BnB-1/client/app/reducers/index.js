import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import errorReducer from './errorReducer.js';
import cartReducer from './cartReducer.js';
import productReducer from './productReducer';
import allProductReducer from './allProductReducer';

export default combineReducers({
  userAuth:userReducer,
  cart:cartReducer,
  errors: errorReducer,
  product:productReducer,
  allProducts:allProductReducer
});
