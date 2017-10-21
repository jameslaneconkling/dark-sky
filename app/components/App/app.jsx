import React       from 'react';
import Header      from '../Header';
import Spinner     from '../Spinner';
import                  './style';


export default ({ status, currentWeather, hourlyWeather }) => (
  <div className="app">
    <Header />
    <div className="limiter">
      <div className="body-container">
        {status === 'pending' &&
          <div className="spinner-container">
            <Spinner />
          </div>
        }
        {status === 'complete' &&
          <div className="error">
            <h2>Error</h2>
            <p>There was an error contacting the server.  Please check your internet connection and try again.</p>
          </div>
        }
        {status === 'completex' &&
          <div>
            <pre>{JSON.stringify(currentWeather, null, 2)}</pre>
            <pre>{JSON.stringify(hourlyWeather, null, 2)}</pre>
          </div>
        }
      </div>
    </div>
  </div>
);
