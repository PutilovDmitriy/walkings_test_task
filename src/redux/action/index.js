export const ADD_WALKING = "ADD_WALKING";
export const UPDATE_WALKINGS = "UPDATE_WALKINGS";
export const CHANGE_SORT_DATE = "CHANGE_SORT_DATE";
export const CHANGE_SORT_DISTANCE = "CHANGE_SORT_DISTANCE";

export function addWalking(walking) {
  return { type: ADD_WALKING, walking };
}

export function updateWalkings(walkings) {
  return { type: UPDATE_WALKINGS, walkings}
}
export function changeSortDate(sort) {
  return { type: CHANGE_SORT_DATE, sort: sort};
}

export function changeSortDistance(sort) {
    return { type: CHANGE_SORT_DISTANCE, sort: sort };
  }

