import { OPEN_FORM, CLOSE_FORM } from '../action';

function addWalkingForm(state = false, action) {
    switch (action.type) {
      case OPEN_FORM:     
        return true;
      case CLOSE_FORM:      
        return false;
      default:
        return state;
    }
  }

  export default addWalkingForm;
