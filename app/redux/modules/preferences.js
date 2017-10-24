import {
  loadPreferences
}                         from '../../utils/localStorage';


/**
 * constants
 */
export const SET_SETTINGS_IS_OPEN = 'SET_SETTINGS_IS_OPEN';
export const SET_MIN_TEMP = 'SET_MIN_TEMP';
export const SET_MAX_TEMP = 'SET_MAX_TEMP';
export const SET_MAX_PRECIPITATION = 'SET_MAX_PRECIPITATION';
export const SET_MORNING_COMMUTE_START_TIME = 'SET_MORNING_COMMUTE_START_TIME';
export const SET_MORNING_COMMUTE_END_TIME = 'SET_MORNING_COMMUTE_END_TIME';
export const SET_EVENING_COMMUTE_START_TIME = 'SET_EVENING_COMMUTE_START_TIME';
export const SET_EVENING_COMMUTE_END_TIME = 'SET_EVENING_COMMUTE_END_TIME';


/**
 * action creators
 */
export const setSettingsIsOpen = isOpen => ({ type: SET_SETTINGS_IS_OPEN, isOpen });
export const setMinTemp = temp => ({ type: SET_MIN_TEMP, temp });
export const setMaxTemp = temp => ({ type: SET_MAX_TEMP, temp });
export const setMaxPrecipitation = precipitation => ({ type: SET_MAX_PRECIPITATION, precipitation });
export const setMorningCommuteStartTime = time => ({ type: SET_MORNING_COMMUTE_START_TIME, time });
export const setMorningCommuteEndTime = time => ({ type: SET_MORNING_COMMUTE_END_TIME, time });
export const setEveningCommuteStartTime = time => ({ type: SET_EVENING_COMMUTE_START_TIME, time });
export const setEveningCommuteEndTime = time => ({ type: SET_EVENING_COMMUTE_END_TIME, time });


/**
 * reducer
 */
export default (
  state = {
    settingsIsOpen: false,
    minTemp: 30,
    maxTemp: 95,
    maxPrecipitation: 0.1,
    morningStartTime: { hours: 8, minutes: 0 },
    morningEndTime: { hours: 9, minutes: 0 },
    eveningStartTime: { hours: 17, minutes: 0 },
    eveningEndTime: { hours: 18, minutes: 0 },
    ...loadPreferences()
  },
  action
) => {
  if (action.type === SET_SETTINGS_IS_OPEN) {
    return {
      ...state,
      settingsIsOpen: action.isOpen
    };
  } else if (action.type === SET_MIN_TEMP) {
    return {
      ...state,
      minTemp: action.temp
    };
  } else if (action.type === SET_MAX_TEMP) {
    return {
      ...state,
      maxTemp: action.temp
    };
  } else if (action.type === SET_MAX_PRECIPITATION) {
    return {
      ...state,
      maxPrecipitation: action.precipitation
    };
  } else if (action.type === SET_MORNING_COMMUTE_START_TIME) {
    return {
      ...state,
      morningStartTime: action.time
    };
  } else if (action.type === SET_MORNING_COMMUTE_END_TIME) {
    return {
      ...state,
      morningEndTime: action.time
    };
  } else if (action.type === SET_EVENING_COMMUTE_START_TIME) {
    return {
      ...state,
      eveningStartTime: action.time
    };
  } else if (action.type === SET_EVENING_COMMUTE_END_TIME) {
    return {
      ...state,
      eveningEndTime: action.time
    };
  }

  return state;
};


/**
 * epics
 */
