import React                   from 'react';
import {}                      from 'prop-types';
import                              './style.scss';


const Settings = ({ minTemp, maxTemp, setMinTempAction, setMaxTempAction }) => (
  <div
    className="settings"
  >

    {minTemp} - {maxTemp}
    <form>
      <label htmlFor="min-temp">Minimum Temperature</label>
      <input id="min-temp" type="number" value={minTemp} max={maxTemp - 5} onChange={setMinTempAction} />
    </form>

    <form>
      <label htmlFor="max-temp">Maximum Temperature</label>
      <input id="max-temp" type="number" value={maxTemp} min={minTemp + 5} onChange={setMaxTempAction} />
    </form>
  </div>
);


Settings.propTypes = {};

export default Settings;
