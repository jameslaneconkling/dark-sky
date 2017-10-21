import {
  connect
}                          from 'react-redux';
import {
  compose
}                          from 'recompose';
import {
  getWeatherRequestStatus,
  getCurrentWeather,
  getHourlyWeather
}                          from '../../selectors/sky';
import App                 from '../../components/App';

const AppContainer = connect(
  state => ({
    status: getWeatherRequestStatus(state),
    currentWeather: getCurrentWeather(state),
    hourlyWeather: getHourlyWeather(state)
  })
)(App);

export default AppContainer;
