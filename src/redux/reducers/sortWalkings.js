import { CHANGE_SORT_DATE, CHANGE_SORT_DISTANCE } from '../action';

const initialState = {
  sortDate: null,
  sortDistance: null
}

function sortWalkings(state = initialState, action) {
    switch (action.type) {
      case CHANGE_SORT_DATE:
        return Object.assign(
          {}, {
            sortDate: action.sort,
            sortDistance: null
          }
        );
      case CHANGE_SORT_DISTANCE:
        return Object.assign(
          {}, {
            sortDate: null,
            sortDistance: action.sort
          }
        );
      default:
        return state;
    }
  }

export default sortWalkings;