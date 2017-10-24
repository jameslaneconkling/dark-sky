/* eslint-disable no-shadow */
import { connect }      from 'react-redux';
import {
  compose,
  withHandlers
}                       from 'recompose';
import {
  getMinTemp,
  getMaxTemp,
  getMaxPrecipitation,
  getMorningCommuteStartTime,
  getMorningCommuteEndTime,
  getEveningCommuteStartTime,
  getEveningCommuteEndTime
}                       from '../../selectors/preferences';
import {
  setMinTemp,
  setMaxTemp,
  setMaxPrecipitation,
  setMorningCommuteStartTime,
  setMorningCommuteEndTime,
  setEveningCommuteStartTime,
  setEveningCommuteEndTime
}                       from '../../redux/modules/preferences';
import Settings         from '../../components/Settings';


export default compose(
  connect(
    state => ({
      minTemp: getMinTemp(state),
      maxTemp: getMaxTemp(state),
      maxPrecipitation: getMaxPrecipitation(state),
      morningCommuteStartTime: getMorningCommuteStartTime(state),
      morningCommuteEndTime: getMorningCommuteEndTime(state),
      eveningCommuteStartTime: getEveningCommuteStartTime(state),
      eveningCommuteEndTime: getEveningCommuteEndTime(state)
    }),
    {
      setMinTemp,
      setMaxTemp,
      setMaxPrecipitation,
      setMorningCommuteStartTime,
      setMorningCommuteEndTime,
      setEveningCommuteStartTime,
      setEveningCommuteEndTime
    }
  ),
  withHandlers({
    setMinTempAction: ({ setMinTemp }) => ({ target: { value } }) => setMinTemp(Number(value)),
    setMaxTempAction: ({ setMaxTemp }) => ({ target: { value } }) => setMaxTemp(Number(value)),
    setMaxPrecipitationAction: ({ setMaxPrecipitation }) => ({ target: { value } }) =>
      setMaxPrecipitation(Number(value) / 100),
    setMorningCommuteStartTimeAction: ({ setMorningCommuteStartTime }) => date =>
      setMorningCommuteStartTime({ hours: date.getHours(), minutes: date.getMinutes() }),
    setMorningCommuteEndTimeAction: ({ setMorningCommuteEndTime }) => date =>
      setMorningCommuteEndTime({ hours: date.getHours(), minutes: date.getMinutes() }),
    setEveningCommuteStartTimeAction: ({ setEveningCommuteStartTime }) => date =>
      setEveningCommuteStartTime({ hours: date.getHours(), minutes: date.getMinutes() }),
    setEveningCommuteEndTimeAction: ({ setEveningCommuteEndTime }) => date =>
      setEveningCommuteEndTime({ hours: date.getHours(), minutes: date.getMinutes() })
  })
)(Settings);
