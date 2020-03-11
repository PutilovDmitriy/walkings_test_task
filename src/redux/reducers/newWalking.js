import { CHANGE_NEW_WALKING_DATE,
        CHANGE_NEW_WALKING_DISTANCE
} from '../action';

const initialState = {
  date: "",
  distance: ""
}

function newWalking(state = initialState, action) {
    switch (action.type) {
      case CHANGE_NEW_WALKING_DATE:
        return Object.assign(
          {}, {
            date: action.date,
            distance: state.distance
          }
        );
      case CHANGE_NEW_WALKING_DISTANCE:
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