import React                   from 'react';
import {}                      from 'prop-types';
import {
  TimePicker
}                              from '@blueprintjs/datetime';
import {
  time2DateTime
}                              from '../../utils/dateTime';
import                              './style.scss';


const Settings = ({
  minTemp, maxTemp, maxPrecipitation, morningCommuteStartTime,
  morningCommuteEndTime, eveningCommuteStartTime, eveningCommuteEndTime,
  setMinTempActionAction, setMaxTempActionAction, setMaxPrecipitationAction,
  setMorningCommuteStartTimeAction, setMorningCommuteEndTimeAction,
  setEveningCommuteStartTimeAction, setEveningCommuteEndTimeAction
}) => (
  <div
    className="settings"
  >
    <label className="pt-label">
      Morning Commute Start Time
      <TimePicker
        value={new Date(time2DateTime(morningCommuteStartTime))}
        onChange={setMorningCommuteStartTimeAction}
      />
    </label>
    {/* vanilla forms [using 3rd party form components is a good idea for stuff like time and date inputs, as native support is patchy and rolling your own calendar is painful]
      <form>
        <label htmlFor="min-temp">Minimum Temperature</label>
        <input id="min-temp" type="number" value={minTemp} max={maxTemp - 5} onChange={setMinTempAction} />
      </form>

      <form>
        <label htmlFor="max-temp">Maximum Temperature</label>
        <input id="max-temp" type="number" value={maxTemp} min={minTemp + 5} onChange={setMaxTempAction} />
      </form>
    */}
  </div>
);


Settings.propTypes = {};

export default Settings;
