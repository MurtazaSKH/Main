import {GET_ERRORS} from './types';
import {SET_CURRENT_USER} from './types';
import {INIT_USER_CART} from './types';

import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
// import { browserHistory } from 'react-router';
import history from '../utils/history'

// Login User action
export const loginUser = (userData) => dispatch => {
  axios.post('/api/users/login',userData)
    .then(res => {
      const {token} = res.data;

      localStorage.setItem('jwtToken',token);
      setAuthToken(token);
      const decoded =jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      // console.log(decoded.id);
      axios.get('/api/cart/userCart',{headers:{id:decoded.id}})
        .then(
          res => {
            // console.log('cart success');
            dispatch(setCartStatus(res.data));
          }
        )
        .catch(err => console.log('CART:'+err));
      history.push('/');
    })
    .catch( err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

// Register User Action
export const registerUser = (userData,browserHistory) => dispatch => {
  axios.post('/api/users/register',userData)
    .then( res => history.push('/login'))
    .catch( err=> dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  }));
}

// Set logged in user in REDUX
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
}

export const setCartStatus = (data) => {
  return {
    type: INIT_USER_CART,
    payload: data
  };
}

// logout user
export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  dispatch(setCartStatus({}));
  history.push('/');
}
