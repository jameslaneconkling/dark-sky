import { Observable }    from 'rxjs/Observable';
import                        'rxjs/add/observable/dom/ajax';
import                        'rxjs/add/operator/switchMap';
import                        'rxjs/add/operator/map';
import                        'rxjs/add/operator/catch';
import                        'rxjs/add/operator/startWith';


/**
 * Utils
 */
const deserializeHourly = ({ data }) =>
  data.map(({ time, summary, icon, precipProbability, temperature }) => ({
    dateTime: time * 1000,
    summary,
    icon,
    precipitation: precipProbability,
    temperature
  }));


/**
 * constants
 */
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';


/**
 * action creators
 */
export const fetchWeather = () => ({ type: FETCH_WEATHER });
export const fetchWeatherSuccess = response => ({ type: FETCH_WEATHER_SUCCESS, response });
export const fetchWeatherError = () => ({ type: FETCH_WEATHER_ERROR });


/**
 * reducer
 */
export default (
  state = {
    status: 'complete',
    icon: null,
    summary: '',
    hourly: []
  },
  action
) => {
  if (action.type === FETCH_WEATHER) {
    return {
      ...state,
      status: 'pending'
    };
  } else if (action.type === FETCH_WEATHER_ERROR) {
    return {
      ...state,
      status: 'error'
    };
  } else if (action.type === FETCH_WEATHER_SUCCESS) {
    return {
      ...state,
      status: 'complete',
      icon: action.response.currently.icon,
      summary: action.response.currently.summary,
      hourly: deserializeHourly(action.response.hourly)
    };
  }

  return state;
};


/**
 * epics
 */
export const fetchWeatherEpic = action$ =>
  action$.ofType(FETCH_WEATHER)
    .switchMap(() => Observable.ajax(`/forecast/${process.env.DARK_SKY_KEY}/38.9072,-77.0369`))
    .map(({ response }) => fetchWeatherSuccess(response))
    .catch((err, caught) => {
      console.error('Error requesting weather', err);
      return caught.startWith(fetchWeatherError());
    });
