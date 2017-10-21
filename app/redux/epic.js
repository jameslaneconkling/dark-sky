import { combineEpics } from 'redux-observable';
import {
  fetchWeatherEpic
}                       from './modules/sky';


export default combineEpics(
  fetchWeatherEpic
);
