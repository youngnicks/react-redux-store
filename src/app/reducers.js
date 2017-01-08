import { Map } from 'immutable';
import { TOGGLE_DRAWER } from './actions';

const initialState = Map({
  drawerOpen: false
});

const app = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return state.set('drawerOpen', !state.get('drawerOpen'));
    default:
      return state;
  }
}

export default app;
