// import {TEST_DISPATCH} from './types';
import {GET_ERRORS} from './types';
import {SET_CURRENT_USER} from './types';

import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

// Register user
export const registerUser = (userData,history) => dispatch => {
  // return {
  //   type:TEST_DISPATCH,
  //   payload: userData
  // };
  axios.post('/api/users/register',userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })

    );
};


// Login - get user token
export const loginUser = (userData) => dispatch => {
  axios.post('/api/users/login',userData)
    .then(res => {
      // save to localstorage
    const {token} = res.data;
    // set token to localstorage
    localStorage.setItem('jwtToken',token);
    // Set token to auth header
    setAuthToken(token);
    // Decode token
    const decoded = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({
      type:GET_ERRORS,
      payload: err.response.data
    }));
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// Log out user
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth hedaer for future request
  setAuthToken(false);
  // set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
}
