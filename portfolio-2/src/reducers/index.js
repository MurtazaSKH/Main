import {combineReducers} from 'redux';
import sheetData from './sheetData.js';
import status from './status';
import contact from './contactReducer';
import {reducer as reduxFormReducer} from 'redux-form';

export default combineReducers({
  portfolioItems:sheetData,
  status:status,
  contact,
  form: reduxFormReducer
});
