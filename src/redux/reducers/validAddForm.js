import { CHANGE_VALID_DATE,
        CHANGE_VALID_DISTANCE
} from '../action';

const initialState = {
    date: null,
    distance: false 
}

function newWalking(state = initialState, action) {
switch (action.type) {
  case  CHANGE_VALID_DATE:
    return Object.assign(
      {}, {
        date: action.date,
        distance: state.distance
      }
    );
  case CHANGE_VALID_DISTANCE:
    return Object.assign(
      {}, {
        date: state.date,
        distance: action.distance
      }
    );
  default:
    return state;
}
}

export default newWalking;