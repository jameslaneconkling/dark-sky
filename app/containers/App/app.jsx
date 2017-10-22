import {
  connect
}                          from 'react-redux';
import {
  getWeatherRequestStatus,
  getDaySummary,
  getDayIcon,
  getShouldBikeForDay
}                          from '../../selectors/sky';
import App                 from '../../components/App';

const AppContainer = connect(
  state => ({
    status: getWeatherRequestStatus(state),
    daySummary: getDaySummary(state),
    dayIcon: getDayIcon(state),
    shouldBikeForDay: getShouldBikeForDay(state)
  })
)(App);

export default AppContainer;
