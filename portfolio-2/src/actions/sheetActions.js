import {UPDATE_CURRENT_STATUS} from '../actions/types';
import {UPDATE_PORTFOLIO_ITEMS} from '../actions/types';
// import axios from 'axios';
import {load} from '../utils/spreadsheet';
import config from '../config';

export const loadPortfolioItems = () => dispatch => {
  window.gapi.load("client", () => {
    console.log('running init');
    window.gapi.client.init({
      apiKey: config.apiKey,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: config.discoveryDocs
    }).then(() => {
      // 3. Initialize and make the API request.
      load((data, error) => {
        if (data) {
          dispatch(setPortfolioItems(data));
        } else {
          console.log('error:' + error)
        }
      }
    );
    });
  });

  dispatch(setCurrentStatus({call: '1st'}));
}

export const setPortfolioItems = (data) => {
  return {type: UPDATE_PORTFOLIO_ITEMS, payload: data};
}

export const setCurrentStatus = (data) => {
  return {type: UPDATE_CURRENT_STATUS, payload: data};
}
