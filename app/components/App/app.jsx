import React             from 'react';
import {
  arrayOf,
  string,
  shape
}                        from 'prop-types';
import Header            from '../../containers/Header';
import Spinner           from '../Spinner';
import Error             from '../Error';
import CommuteDisplay    from '../CommuteDisplay';
import DayDisplay        from '../DayDisplay';
import Settings          from '../../containers/SettingsContainer';
import                        './style';


const app = ({
  status, daySummary, dayIcon, morningCommuteWeather, eveningCommuteWeather, settingsIsOpen
}) => (
  <div className="app">
    <Header />
    <div className="limiter">
      <div className="body-container">
        {settingsIsOpen && <Settings />}

        {status === 'pending' &&
          <div className="spinner-container">
            <Spinner />
          </div>
        }

        {status === 'error' &&
          <Error>
            <h2>Error :[</h2>
            <p>There was an error contacting the server</p>
            <p>Please check your internet connection and try again</p>
          </Error>
        }

        {status === 'complete' &&
          <div>
            <div className="should-bike">
              {
                [morningCommuteWeather, eveningCommuteWeather]
                  .filter(weather => weather.length > 0) // edge case: don't show display if no weather points are returned for range
                  .sort(([a], [b]) => a.dateTime - b.dateTime) // sort displays by time, i.e. in afternoon, show [eveningCommute, tomorrowMorningCommute]
                  .map((weather, idx) => <CommuteDisplay key={idx} weather={weather} />) // render
              }
            </div>
            <DayDisplay
              summary={daySummary}
              icon={dayIcon}
            />
          </div>
        }
      </div>
    </div>
  </div>
);

app.propTypes = {
  status: string.isRequired,
  daySummary: string.isRequired,
  dayIcon: string,
  morningCommuteWeather: arrayOf(shape()).isRequired,
  eveningCommuteWeather: arrayOf(shape()).isRequired
};

export default app;
