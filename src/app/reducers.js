import { TOGGLE_DRAWER } from './actions';

const initialState = {
  drawerOpen: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }
    default:
      return state;
  }
}

export default app;
