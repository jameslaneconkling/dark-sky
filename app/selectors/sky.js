import {
  getMinTemp,
  getMaxTemp,
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
export const getShouldBikeForTimeRange = (state, start, end) => {
  const minTemp = getMinTemp(state);
  const maxTemp = getMaxTemp(state);

  return getWeatherRange(state, start, end)
    .reduce((shouldBike, { temperature }) => (
      shouldBike && temperature >= minTemp && temperature <= maxTemp
    ), true);
};
export const getShouldBikeForDay = (state) => {
  const morningStartTime = getMorningCommuteStartTime(state);
  const morningEndTime = getMorningCommuteEndTime(state);
  const eveningStartTime = getEveningCommuteStartTime(state);
  const eveningEndTime = getEveningCommuteEndTime(state);

  return getShouldBikeForTimeRange(state, morningStartTime, morningEndTime) &&
    getShouldBikeForTimeRange(state, eveningStartTime, eveningEndTime);
};
