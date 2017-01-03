import { CALL_API, Schemas } from '../middleware/api'

export const REQUEST_REQUEST = 'REQUEST_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

// Fetches a single request from API.
const fetchRequest = key => ({
  [CALL_API]: {
    types: [REQUEST_REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE],
    endpoint: `/api/requests/${key}`,
    schema: Schemas.REQUEST
  }
});

// Fetches a single request unless it is cached.
export const loadRequest = (key) => (dispatch, getState) => {
  const request = getState().requests.all[key];
  if (request) {
    return null;
  }

  return dispatch(fetchRequest(key));
}

export const REQUESTS_REQUEST = 'REQUESTS_REQUEST';
export const REQUESTS_SUCCESS = 'REQUESTS_SUCCESS';
export const REQUESTS_FAILURE = 'REQUESTS_FAILURE';

// Fetches a page of requests.
const fetchRequests = (nextPageUrl) => ({
  user: 'all',
  [CALL_API]: {
    types: [REQUESTS_REQUEST, REQUESTS_SUCCESS, REQUESTS_FAILURE],
    endpoint: nextPageUrl,
    schema: Schemas.REQUEST_ARRAY
  }
});

// Fetches a page of requests.
export const loadRequests = (nextPage) => (dispatch, getState) => {
  const {
    nextPageUrl = `/api/requests/paginated`,
    pageCount = 0
  } = getState().pagination.requests.all || {}

  if (pageCount > 0 && !nextPage) {
    return null
  }
console.log('%%%', nextPageUrl);
  return dispatch(fetchRequests(nextPageUrl));
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})
