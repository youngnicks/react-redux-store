export const TOGGLE_DRAWER = 'app/TOGGLE_DRAWER';

// Toggles drawer's open value
export const toggleDrawer = () => (dispatch, getState) => {
  return dispatch({type: TOGGLE_DRAWER});
}
