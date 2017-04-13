import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
  drawerState: 'closed',
  drawerDisabled: true,
});
const openDrawer = (state, action) => ({
  ...state,
  drawerState: 'opened',
});
const closeDrawer = (state, action) => ({
  ...state,
  drawerState: 'closed'
});
const actionHandlers = {
  [Types.OPEN_DRAWER]: openDrawer,
  [Types.CLOSE_DRAWER]: closeDrawer,
};
export default createReducer(initialState, actionHandlers);