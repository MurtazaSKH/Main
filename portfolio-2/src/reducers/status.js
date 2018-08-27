import {UPDATE_CURRENT_STATUS} from '../actions/types';

const initialState = {
  status: {}
}

export default function (state=initialState,action) {
  switch(action.type) {
    case UPDATE_CURRENT_STATUS:
      return {
        status: action.payload
      }
    default:
      return state;
  }
}
