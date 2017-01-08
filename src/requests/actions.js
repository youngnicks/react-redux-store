import { CALL_API } from '../store/middleware/api';
import * as Schemas from './schemas';

// Single Request
export const REQUEST_REQUEST = 'requests/REQUEST_REQUEST';
export const REQUEST_SUCCESS = 'requests/REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'requests/REQUEST_FAILURE';

// Fetches a single request from API.
const fetchRequest = key => ({
  [CALL_API]: {
    types: [REQUEST_REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE],
    endpoint: `/requests/${key}`,
    schema: Schemas.REQUEST
  }
});

// Fetches a single request unless it is cached.
export const loadRequest = (key) => (dispatch, getState) => {
  const request = getState().entities.requests[key];
  if (request) {
    return null;
  }

  return dispatch(fetchRequest(key));
}

// Request Array
export const REQUESTS_REQUEST = 'requests/REQUESTS_REQUEST';
export const REQUESTS_SUCCESS = 'requests/REQUESTS_SUCCESS';
export const REQUESTS_FAILURE = 'requests/REQUESTS_FAILURE';

// Fetches a page of requests.
const fetchRequests = (sort, nextPageUrl) => ({
  sort,
  [CALL_API]: {
    types: [REQUESTS_REQUEST, REQUESTS_SUCCESS, REQUESTS_FAILURE],
    endpoint: nextPageUrl,
    schema: [Schemas.REQUEST]
  }
});

// Fetches a page of requests.
export const loadRequests = (sort, nextPage) => (dispatch, getState) => {
  const {
    nextPageUrl = `/requests/paginated`,
    pageCount = 0
  } = getState().requests.pages[sort] || {}

  if (pageCount > 0 && !nextPage) {
    return null
  }

  return dispatch(fetchRequests(sort, nextPageUrl));
}

// Error Message
export const RESET_ERROR_MESSAGE = 'requests/RESET_ERROR_MESSAGE';

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
});
