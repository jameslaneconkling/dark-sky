import R                  from 'ramda';
import {
  getMinTemp,
  getMaxTemp,
  getMaxPrecipitation
}                         from './preferences';
import {
  time2DateTime
}                         from '../utils/dateTime';


export const getWeatherRequestStatus = state => state.sky.status;
export const getDaySummary = state => state.sky.summary;
export const getDayIcon = state => state.sky.icon;
export const getWeather = state => state.sky.hourly;
export const getWeatherRange = (state, start, end) =>
  getWeather(state)
    .filter(({ dateTime }) => (
      dateTime >= time2DateTime(start, dateTime) &&
      dateTime <= time2DateTime(end, dateTime)
    ));
export const getBadWeatherFromWeather = (state, weather) => {
  const minTemp = getMinTemp(state);
  const maxTemp = getMaxTemp(state);
  const maxPrecipitation = getMaxPrecipitation(state);

  // NOTE - could also use a Set here if polyfilled
  return Object.keys(weather.reduce((badWeather, { temperature, precipitation }) => {
    if (temperature < minTemp) {
      // safe to mutate badWeather, as it was created for this reduction
      badWeather.cold = true; // eslint-disable-line no-param-reassign
    } else if (temperature > maxTemp) {
      badWeather.heat = true; // eslint-disable-line no-param-reassign
    }

    if (precipitation > maxPrecipitation) {
      badWeather.rain = true; // eslint-disable-line no-param-reassign
    }

    return badWeather;
  }, {}));
};
