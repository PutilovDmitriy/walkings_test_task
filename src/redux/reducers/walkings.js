import { ADD_WALKING, UPDATE_WALKINGS } from '../action';

function walkings(state = [], action) {
    switch (action.type) {
      case ADD_WALKING:     
        return state.concat(action.walking);
      case UPDATE_WALKINGS:
        let newState = action.walkings
        return newState;
      default:
        return state;
    }
  }

  export default walkings;
