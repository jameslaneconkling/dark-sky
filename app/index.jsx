/* global document window */
import React                  from 'react';
import { render }             from 'react-dom';
import { Provider }           from 'react-redux';
import store                  from './redux/store';
import App                    from './containers/App';
import {
  fetchWeather
}                             from './redux/modules/sky';
import                             './style.scss';
import                             './assets/svg-store';


if (process.env.NODE_ENV === 'development') {
  window.store = store;
}


store.dispatch(fetchWeather());


render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('application'));
