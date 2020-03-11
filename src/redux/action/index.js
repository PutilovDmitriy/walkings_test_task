export const ADD_WALKING = "ADD_WALKING";
export const UPDATE_WALKING = "UPDATE_WALKING"
export const DELITE_WALKING = "DELITE_WALKING"
export const CHANGE_SORT_DATE = "CHANGE_SORT_DATE";
export const CHANGE_SORT_DISTANCE = "CHANGE_SORT_DISTANCE";
export const OPEN_FORM = "OPEN_FORM";
export const CLOSE_FORM = "CLOSE_FORM";
export const CHANGE_START_INDEX = "CHANGE_START_INDEX";
export const CHANGE_END_INDEX = "CHANGE_END_INDEX";
export const CHANGE_NEW_WALKING_DATE = "CHANGE_NEW_WALKING_DATE";
export const CHANGE_NEW_WALKING_DISTANCE = "CHANGE_NEW_WALKING_DISTANCE";
export const CHANGE_VALID_DATE = "CHANGE_VALID_DATE";
export const CHANGE_VALID_DISTANCE = "CHANGE_VALID_DISTANCE";
     

export function addWalking(walking) {
  return { type: ADD_WALKING, walking };
}

export function updateWalking(i, walking) {
  return { type: UPDATE_WALKING, i, walking}
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

export function changeStartIndex(index) {
  return {type: CHANGE_START_INDEX, index}
}

export function changeEndIndex(index) {
  return {type: CHANGE_END_INDEX, index}
}

export function changeNewWalkingDate(date) {
  return {type: CHANGE_NEW_WALKING_DATE, date}
}
 
export function changeNewWalkingDistance(distance) {
  return {type: CHANGE_NEW_WALKING_DISTANCE, distance}
}

export function changeValidDate(date) {
  return {type: CHANGE_VALID_DATE, date}
}

export function changeValidDistance(distance) {
  return {type: CHANGE_VALID_DISTANCE, distance}
}

