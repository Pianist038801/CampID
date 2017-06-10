import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
  homeTab: 'AN10NA',
  spinnerVisible: false,
  avatarUri: 'https://facebook.github.io/react/img/logo_og.png',
});
const homeTab = (state, action) => ({
  ...state,
  homeTab: action.homeTab,
});
const spinnerVisible = (state, action) => ({
  ...state,
  spinnerVisible: action.spinnerVisible,
});
const setAvatarUri = (state, action) => ({
  ...state,
  avatarUri: action.avatarUri,
});

const actionHandlers = {
  [Types.SET_HOME_TAB]: homeTab,
  [Types.SET_SPINNER_VISIBLE]: spinnerVisible,
  [Types.SET_AVATAR_URI]: setAvatarUri,
};
export default createReducer(initialState, actionHandlers);
