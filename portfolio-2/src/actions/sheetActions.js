import {UPDATE_CURRENT_STATUS} from '../actions/types';
import {UPDATE_PORTFOLIO_ITEMS} from '../actions/types';
// import axios from 'axios';
import {load,saveContact} from '../utils/spreadsheet';
import config from '../config';

export const loadPortfolioItems = () => dispatch => {
  window.gapi.load("client", () => {
    // console.log('running init');
    window.gapi.client.init({
      apiKey: config.apiKey,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: config.discoveryDocs
    }).then(() => {
      // 3. Initialize and make the API request.
      load((data, error) => {
        if (data) {
          dispatch(setCurrentStatus({link: 'complete'}));
          dispatch(setPortfolioItems(data));
        } else {
          dispatch(setCurrentStatus({link: 'failed'}));
          console.log('error:' + error)
        }
      }
    );
    })
    .catch( err=> dispatch(setCurrentStatus({link: 'failed'})));
  });
}

export const saveContactAction = () => dispatch => {
  window.gapi.load("client", () => {
    var API_KEY = config.apiKey;
    console.log(API_KEY);
    window.gapi.client.init({
      apiKey: API_KEY,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: config.discoveryDocs
    }).then(() => {
      // 3. Initialize and make the API request.
      const data = {col:'A',row:1,value:'test'};
      saveContact((data) => {
        console.log('saveContact Executed');
      });

    });
  });
}

export const setPortfolioItems = (data) => {
  return {type: UPDATE_PORTFOLIO_ITEMS, payload: data};
}

export const setCurrentStatus = (data) => {
  return {type: UPDATE_CURRENT_STATUS, payload: data};
}
