export const ADD_WALKING = "ADD_WALKING";
export const DELITE_WALKING = "DELITE_WALKING"
export const CHANGE_SORT_DATE = "CHANGE_SORT_DATE";
export const CHANGE_SORT_DISTANCE = "CHANGE_SORT_DISTANCE";
export const OPEN_FORM = "OPEN_FORM";
export const CLOSE_FORM = "CLOSE_FORM";


export function addWalking(walking) {
  return { type: ADD_WALKING, walking };
}

export function deliteWalking(id) {
  return { type: DELITE_WALKING, id };
}

export function changeSortDate(sort) {
  return { type: CHANGE_SORT_DATE, sort: sort};
}

export function changeSortDistance(sort) {
    return { type: CHANGE_SORT_DISTANCE, sort: sort };
  }

export function openAddWalkingForm() {
  return {type: OPEN_FORM }
}

export function closeAddWalkingForm() {
  return {type: CLOSE_FORM }
}