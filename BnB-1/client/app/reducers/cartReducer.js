import {INIT_USER_CART} from '../actions/types';
import isEmpty from '../utils/isEmpty';

const initialState = {
  cart:{}
}

export default function (state=initialState,action) {
  switch(action.type) {
    case INIT_USER_CART:
      return {
        // cart:action.payload
        cart:action.payload
      }
    default:
      return state;
  }
}
