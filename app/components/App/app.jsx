import React       from 'react';
import Header      from '../Header';


export default ({ status, currentWeather, hourlyWeather }) => (
  <div className="app">
    <Header />
    <div className="limiter">
      <div>{status}</div>
      <div>
        <pre>{JSON.stringify(currentWeather)}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(hourlyWeather)}</pre>
      </div>
    </div>
  </div>
);
