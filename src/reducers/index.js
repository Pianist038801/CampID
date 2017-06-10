import { combineReducers } from 'redux-immutable';
import globals from './globals';
import route from './route';
import drawer from './drawer';

const applicationReducers = {
  globals,
  drawer,
  route,
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}
