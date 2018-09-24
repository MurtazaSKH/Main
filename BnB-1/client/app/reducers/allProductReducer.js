import { PRODUCT_ALL_PRODUCTS } from '../actions/types';

const initialState = {
  allProducts: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_ALL_PRODUCTS:
      return {
        allProducts: action.payload
      }
    default:
      return state;
  }
}
