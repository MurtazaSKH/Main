import {PRODUCT_FILE_NAME} from './types';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import history from '../utils/history'

export const addProduct = (productData) => dispatch => {
  axios.post('/api/products/add',productData)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data));
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
