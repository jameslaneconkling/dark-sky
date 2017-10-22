import {
  connect
}                          from 'react-redux';
import {
  getWeatherRequestStatus,
  getDaySummary,
  getDayIcon,
  getWeatherRange
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
    morningCommuteWeather: getWeatherRange(
      state,
      getMorningCommuteStartTime(state),
      getMorningCommuteEndTime(state)
    ),
    eveningCommuteWeather: getWeatherRange(
      state,
      getEveningCommuteStartTime(state),
      getEveningCommuteEndTime(state)
    )
  })
)(App);

export default AppContainer;
