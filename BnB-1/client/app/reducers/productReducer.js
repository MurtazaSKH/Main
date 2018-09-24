import { PRODUCT_FILE_NAME, PRODUCT_ALL_PRODUCTS } from '../actions/types';

const initialState = {
  imageFile: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_FILE_NAME:
      return action.payload;
    default:
      return state;
  }
}
