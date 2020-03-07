import { combineReducers } from 'redux';
import walkings from './walkings';
import sortWalkings from './sortWalkings'

export default combineReducers({
    walkings,
    sortWalkings
  })