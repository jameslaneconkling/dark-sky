import React       from 'react';


export default ({ status, currentWeather, hourlyWeather }) => (
  <div>
    <div>{status}</div>
    <div>
      <pre>{JSON.stringify(currentWeather)}</pre>
    </div>
    <div>
      <pre>{JSON.stringify(hourlyWeather)}</pre>
    </div>
  </div>
);
