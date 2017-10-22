import React       from 'react';
import Header      from '../Header';
import Spinner     from '../Spinner';
import Error       from '../Error';
import                  './style';


const app = ({ status, daySummary, dayIcon, shouldBikeForDay }) => (
  <div className="app">
    <Header />
    <div className="limiter">
      <div className="body-container">
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
            <p className="summary">{daySummary}</p>
            <div className="shouldBike">
              {shouldBikeForDay ?
                <p>Good day to Bike</p> :
                <p>Might want to take the metro</p>
              }
            </div>
          </div>
        }
      </div>
    </div>
  </div>
);

app.propTypes = {};

export default app;
