import { combineReducers } from 'redux';
import { ADD_WALKING } from './action';

const initialState = {
    walkingsData: []
}

function walkingApp(state = initialState, action) {
    switch(action.type) {
        case ADD_WALKING:
            return state.walkingsData.concat(action);
    }
    return state
}

export default walkingApp;