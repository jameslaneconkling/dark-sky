import React                   from 'react';
import {}                      from 'prop-types';
import                              './style.scss';

const nameMap = {
  'clear-day': 'sun',
  'clear-night': 'moon',
  rain: 'cloud-drizzle-sun',
  snow: 'snowflake',
  sleet: 'cloud-snow-sun',
  wind: 'wind',
  fog: 'cloud-fog-sun',
  cloudy: 'cloud',
  'partly-cloudy-day': 'cloud-sun',
  'partly-cloudy-night': 'cloud-moon'
};
const mapIconName = name => nameMap[name] || 'compass';

const Icon = ({ name }) => (
  console.log(name) ||
  <span
    className="icon"
  >
    <svg className="svg-icon">
      <use xlinkHref={`#${mapIconName(name)}`} />
    </svg>
  </span>
);


Icon.propTypes = {};

export default Icon;
