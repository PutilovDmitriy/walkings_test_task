import { combineReducers } from 'redux';
import walkings from './walkings';
import sortWalkings from './sortWalkings'
import addWalkingForm from './addWalkingForm';
import indexChart from './indexChart';
import newWalking from './newWalking';
import validAddForm from './validAddForm';

export default combineReducers({
    walkings,
    sortWalkings,
    addWalkingForm,
    indexChart,
    newWalking,
    validAddForm
  })