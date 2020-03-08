import { combineReducers } from 'redux';
import walkings from './walkings';
import sortWalkings from './sortWalkings'
import addWalkingForm from './addWalkingForm';

export default combineReducers({
    walkings,
    sortWalkings,
    addWalkingForm
  })