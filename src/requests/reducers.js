import { REQUESTS_REQUEST, REQUESTS_SUCCESS, REQUESTS_FAILURE,
         RESET_ERROR_MESSAGE } from './actions';
import paginate from '../store/reducers/paginate';
import { combineReducers } from 'redux';

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
};

// Updates the pagination data for different actions.
const pages = paginate({
  mapActionToKey: action => action.sort,
  types: [
    REQUESTS_REQUEST,
    REQUESTS_SUCCESS,
    REQUESTS_FAILURE
  ]
});

export default combineReducers({
  errorMessage,
  pages
});
