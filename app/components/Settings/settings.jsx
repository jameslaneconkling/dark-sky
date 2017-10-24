/* eslint-disable jsx-a11y/label-has-for */
import React                   from 'react';
import {
  number,
  shape,
  func
}                              from 'prop-types';
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
  setMinTempAction, setMaxTempAction, setMaxPrecipitationAction,
  setMorningCommuteStartTimeAction, setMorningCommuteEndTimeAction,
  setEveningCommuteStartTimeAction, setEveningCommuteEndTimeAction
}) => (
  <div className="settings">
    <div>
      <form>
        <h2>Temperature</h2>
        <label className="pt-label .modifier">
          Minimum <span className="unit">(˚F)</span>
          <input
            className="pt-input"
            type="number"
            value={minTemp}
            min={-100}
            max={maxTemp - 5}
            onChange={setMinTempAction}
          />
        </label>
        <label className="pt-label .modifier">
          Maximum <span className="unit">(˚F)</span>
          <input
            className="pt-input"
            type="number"
            value={maxTemp}
            min={minTemp + 5}
            max={200}
            onChange={setMaxTempAction}
          />
        </label>
      </form>

      <form>
        <h2>Change of Rain</h2>
        <label className="pt-label .modifier">
          Maximum <span className="unit">(%)</span>
          <input
            className="pt-input"
            type="number"
            value={maxPrecipitation * 100}
            min={0}
            max={100}
            onChange={setMaxPrecipitationAction}
          />
        </label>
      </form>

      <form>
        <h2>Morning Commute</h2>
        <label className="pt-label">
          Start Time
          <TimePicker
            value={new Date(time2DateTime(morningCommuteStartTime))}
            maxTime={new Date(time2DateTime({
              hours: morningCommuteEndTime.hours,
              minutes: morningCommuteEndTime.minutes - 30
            }))}
            onChange={setMorningCommuteStartTimeAction}
          />
        </label>
        <label className="pt-label">
          End Time
          <TimePicker
            value={new Date(time2DateTime(morningCommuteEndTime))}
            minTime={new Date(time2DateTime({
              hours: morningCommuteStartTime.hours,
              minutes: morningCommuteStartTime.minutes + 30
            }))}
            maxTime={new Date(time2DateTime({
              hours: eveningCommuteStartTime.hours,
              minutes: eveningCommuteStartTime.minutes - 30
            }))}
            onChange={setMorningCommuteEndTimeAction}
          />
        </label>
      </form>

      <form>
        <h2>Evening Commute</h2>
        <label className="pt-label">
          Start Time
          <TimePicker
            value={new Date(time2DateTime(eveningCommuteStartTime))}
            minTime={new Date(time2DateTime({
              hours: morningCommuteEndTime.hours,
              minutes: morningCommuteEndTime.minutes + 30
            }))}
            maxTime={new Date(time2DateTime({
              hours: eveningCommuteEndTime.hours,
              minutes: eveningCommuteEndTime.minutes - 30
            }))}
            onChange={setEveningCommuteStartTimeAction}
          />
        </label>
        <label className="pt-label">
          End Time
          <TimePicker
            value={new Date(time2DateTime(eveningCommuteEndTime))}
            minTime={new Date(time2DateTime({
              hours: eveningCommuteStartTime.hours,
              minutes: eveningCommuteStartTime.minutes + 30
            }))}
            onChange={setEveningCommuteEndTimeAction}
          />
        </label>
      </form>
    </div>
  </div>
);


Settings.propTypes = {
  minTemp: number.isRequired,
  maxTemp: number.isRequired,
  maxPrecipitation: number.isRequired,
  morningCommuteStartTime: shape().isRequired,
  morningCommuteEndTime: shape().isRequired,
  eveningCommuteStartTime: shape().isRequired,
  eveningCommuteEndTime: shape().isRequired,
  setMinTempAction: func.isRequired,
  setMaxTempAction: func.isRequired,
  setMaxPrecipitationAction: func.isRequired,
  setMorningCommuteStartTimeAction: func.isRequired,
  setMorningCommuteEndTimeAction: func.isRequired,
  setEveningCommuteStartTimeAction: func.isRequired,
  setEveningCommuteEndTimeAction: func.isRequired
};

export default Settings;
