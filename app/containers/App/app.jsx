import {
  connect
}                          from 'react-redux';
import {
  getWeatherRequestStatus,
  getDaySummary,
  getDayIcon,
  badWeatherForTimeRange
}                          from '../../selectors/sky';
import {
  getMorningCommuteStartTime,
  getMorningCommuteEndTime,
  getEveningCommuteStartTime,
  getEveningCommuteEndTime
}                          from '../../selectors/preferences';
import App                 from '../../components/App';

const AppContainer = connect(
  state => ({
    status: getWeatherRequestStatus(state),
    daySummary: getDaySummary(state),
    dayIcon: getDayIcon(state),
    morningCommuteBadWeather: badWeatherForTimeRange(
      state,
      getMorningCommuteStartTime(state),
      getMorningCommuteEndTime(state)
    ),
    eveningCommuteBadWeather: badWeatherForTimeRange(
      state,
      getEveningCommuteStartTime(state),
      getEveningCommuteEndTime(state)
    )
  })
)(App);

export default AppContainer;
