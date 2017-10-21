/* global document */
import React                  from 'react';
import { render }             from 'react-dom';
import { Provider }           from 'react-redux';
import store                  from './redux/store';
import App                    from './containers/App';
import {
  fetchWeather
}                             from './redux/modules/sky';
import                             './style.scss';


store.dispatch(fetchWeather());


render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('application'));
