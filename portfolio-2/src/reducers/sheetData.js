import {UPDATE_PORTFOLIO_ITEMS} from '../actions/types';

const initialState = {
  portfolioItems: {}
}

export default function (state=initialState,action) {
  switch(action.type) {
    case UPDATE_PORTFOLIO_ITEMS:
      return {
        portfolioItems: action.payload
      }
    default:
      return state;
  }
}
