/* global window */
/* eslint-disable no-underscore-dangle */
import {
  createStore,
  applyMiddleware,
  compose
}                             from 'redux';
import {
  createEpicMiddleware
}                             from 'redux-observable';
import reducer                from './reducer';
import epic                   from './epic';
import {
  persistPreferences
}                             from '../utils/localStorage';
import {
  getPreferences
}                             from '../selectors/preferences';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const localStorageMiddleware = store => next => (action) => {
  const result = next(action);

  persistPreferences(getPreferences(store.getState()));

  return result;
};


export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      createEpicMiddleware(epic),
      localStorageMiddleware
    ),
  )
);
