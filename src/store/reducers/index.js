import merge from 'lodash/merge';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import app from '../../app/reducers';
import requests from '../../requests/reducers';

const initialState = {
  requests: {}
};

// Updates an entity cache in response to any action with response.entities.
const entities = (state = initialState, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }

  return state;
};

const rootReducer = combineReducers({
  entities,
  app,
  requests,
  routing
});

export default rootReducer;
