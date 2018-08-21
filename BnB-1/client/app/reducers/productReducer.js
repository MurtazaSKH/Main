import {PRODUCT_FILE_NAME} from '../actions/types';

const initialState = {
  imageFile: ''
}

export default function (state=initialState,action) {
  switch(action.type) {
    case PRODUCT_FILE_NAME:
      return action.payload;
    default:
      return state;
  }
}
