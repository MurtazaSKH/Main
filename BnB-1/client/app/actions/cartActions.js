// import setAuthToken from '../utils/setAuthToken';
import {INIT_USER_CART,UPDATE_USER_CART} from './types';

import axios from 'axios';
import history from '../utils/history';

// Get Cart on login
export const getCart = (id) => dispatch => {
  axios.get('/api/cart/userCart',{headers:{id:id}})
    .then(res => {
      dispatch(setCartStatus(res.data));
    })
    .catch(err => dispatch({
      type: 'GET_ERRORS',
      payload: err.response.data
    }));
};

export const setCartStatus = (data) => {
  return {
    type: INIT_USER_CART,
    payload: data
  };
}

export const updateCartStatus = (data) => {
  return {
    type: UPDATE_USER_CART,
    payload: data
  };
}

export const removeCartItem = (cartData) => dispatch => {
  axios.post('/api/cart/remove',cartData)
    .then(res => {
      dispatch(updateCartStatus(res.data));
    })
    .catch(err=> dispatch({
      type: 'GET_ERRORS',
      payload: err.response.data
    }));
}

export const addCartItem = (cartData) => dispatch => {
  axios.post('/api/cart/add',cartData)
    .then(res => {
      dispatch(updateCartStatus(res.data));
    })
    .catch(err=> dispatch({
      type: 'GET_ERRORS',
      payload: err.response.data
    }));
}
