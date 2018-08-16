// import setAuthToken from '../utils/setAuthToken';
import {INIT_USER_CART} from './types';

import axios from 'axios';
import history from '../utils/history';

// Get Cart on login
export const getCart = () => dispatch => {
  axios.get('/api/cart/all')
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
