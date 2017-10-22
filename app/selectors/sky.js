import {
  getMinTemp,
  getMaxTemp,
  getMaxPrecipitation,
  getMorningCommuteStartTime,
  getMorningCommuteEndTime,
  getEveningCommuteStartTime,
  getEveningCommuteEndTime
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
    .filter(({ time }) => (
      time >= time2DateTime(time, start) &&
      time <= time2DateTime(time, end)
    ));
export const badWeatherForTimeRange = (state, start, end) => {
  const minTemp = getMinTemp(state);
  const maxTemp = getMaxTemp(state);
  const maxPrecipitation = getMaxPrecipitation(state);

  return Object.keys(getWeatherRange(state, start, end)
    .reduce((badWeather, { temperature, precipitation }) => {
      if (temperature < minTemp) {
        // safe to mutate badWeather, as it was created for this reduction
        badWeather.cold = true; // eslint-disable-line no-param-reassign
      } else if (temperature > maxTemp) {
        badWeather.hot = true; // eslint-disable-line no-param-reassign
      }

      if (precipitation > maxPrecipitation) {
        badWeather.rain = true; // eslint-disable-line no-param-reassign
      }

      return badWeather;
    }, {}));
};
export const getShouldBikeForDay = (state) => {
  const morningStartTime = getMorningCommuteStartTime(state);
  const morningEndTime = getMorningCommuteEndTime(state);
  const eveningStartTime = getEveningCommuteStartTime(state);
  const eveningEndTime = getEveningCommuteEndTime(state);

  return badWeatherForTimeRange(state, morningStartTime, morningEndTime).length === 0 &&
    badWeatherForTimeRange(state, eveningStartTime, eveningEndTime).length === 0;
};
