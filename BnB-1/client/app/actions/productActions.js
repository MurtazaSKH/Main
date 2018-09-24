import {PRODUCT_FILE_NAME,PRODUCT_ALL_PRODUCTS,GET_ERRORS} from './types';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import history from '../utils/history'

export const viewAllProducts = () => dispatch => {
  axios.get('/api/products/all')
    .then(res => dispatch(setAllProducts(res.data)))
    .catch(err => console.log(err.response.data));
}

export const addProduct = (productData) => dispatch => {
  axios.post('/api/products/add',productData)
    .then(res => console.log(res.data))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

// upload image file separately and save image name to redux
export const uploadImage = (imageFile) => dispatch => {
  axios.post('./api/saveImage',imageFile)
    .then(res => dispatch(setProductFile(res.data)))
    .catch(err => console.log(err));
}

// Save file name to redux so it is accessible from add product Form
export const setProductFile = (data) => {
  return {
    type: PRODUCT_FILE_NAME,
    payload: data
  };
}

// Save All products to redux store to view on shopping page
export const setAllProducts = (data) => {
  return {
    type: PRODUCT_ALL_PRODUCTS,
    payload:data
  }
}
