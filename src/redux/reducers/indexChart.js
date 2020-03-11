import { CHANGE_START_INDEX, CHANGE_END_INDEX } from '../action';

const initialState = {
  startIndex: 0,
  endIndex: 4
}

function indexChart(state = initialState, action) {
    switch (action.type) {
      case CHANGE_START_INDEX:
        return Object.assign(
          {}, {
            startIndex: action.index,
            endIndex: state.endIndex
          }
        );
      case CHANGE_END_INDEX:
        return Object.assign(
          {}, {
            startIndex: state.startIndex,
            endIndex: action.index
          }
        );
      default:
        return state;
    }
  }

export default indexChart;