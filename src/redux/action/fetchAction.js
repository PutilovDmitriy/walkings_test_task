export const FETCH_WALKINGS_BEGIN   = 'FETCH_WALKINGS_BEGIN';
export const FETCH_WALKINGS_SUCCESS = 'FETCH_WALKINGS_SUCCESS';
export const FETCH_WALKINGS_FAILURE = 'FETCH_WALKINGS_FAILURE';

export const fetchWalkingsBegin = () => ({
  type: FETCH_WALKINGS_BEGIN
});

export const fetchWalkingsSuccess = walkings => ({
  type: FETCH_WALKINGS_SUCCESS,
  walkings
});

export const fetchWalkingsFailure = error => ({
  type: FETCH_WALKINGS_FAILURE,
  error
});

export function fetchWalkings() {
  return dispatch => {
    dispatch(fetchWalkingsBegin());
    return fetch('https://afternoon-wave-94253.herokuapp.com/walking')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchWalkingsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchWalkingsFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}