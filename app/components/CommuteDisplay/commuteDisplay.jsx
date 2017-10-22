import React                   from 'react';
import {
  connect
}                              from 'react-redux';
import {
  compose,
  mapProps
}                              from 'recompose';
import {
  arrayOf,
  string,
  oneOf,
  bool
}                              from 'prop-types';
import {
  getMorningCommuteStartTime,
  getMorningCommuteEndTime
}                              from '../../selectors/preferences';
import {
  getBadWeatherFromWeather
}                              from '../../selectors/sky';
import {
  isMorning,
  isToday
}                              from '../../utils/dateTime';
import                              './style.scss';


const pluralize = (words) => {
  if (words.length === 1) {
    return words[0];
  } else if (words.length > 1) {
    return `${words.slice(0, words.length - 1).join(', ')} and ${words[words.length - 1]}`;
  }

  return '';
};


const CommuteDisplay = ({ badWeather, morningOrEvening, isToday }) => (
  <div
    className="commute-display"
  >
    {badWeather.length === 0 ?
      <p>Good day to Bike {isToday ? 'this' : 'tomorrow'} {morningOrEvening}</p> :
      <p>Might want to take the metro {isToday ? 'this' : 'tomorrow'} {morningOrEvening} because of {pluralize(badWeather)}</p>
    }
  </div>
);


CommuteDisplay.propTypes = {
  badWeather: arrayOf(string).isRequired,
  morningOrEvening: oneOf(['morning', 'evening']).isRequired,
  isToday: bool.isRequired
};

export default compose(
  connect(
    (state, { weather }) => ({
      morningStartTime: getMorningCommuteStartTime(state),
      morningEndTime: getMorningCommuteEndTime(state),
      badWeather: getBadWeatherFromWeather(state, weather)
    })
  ),
  mapProps(
    ({ weather, morningStartTime, morningEndTime, ...rest }) => ({
      ...rest,
      morningOrEvening: isMorning(weather[0].dateTime, morningStartTime, morningEndTime) ?
        'morning' :
        'evening',
      isToday: isToday(weather[0].dateTime)
    })
  )
)(CommuteDisplay);
