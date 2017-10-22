import { combineReducers } from 'redux';
import sky                 from './modules/sky';
import preferences         from './modules/preferences';

export default combineReducers({
  sky,
  preferences
});
