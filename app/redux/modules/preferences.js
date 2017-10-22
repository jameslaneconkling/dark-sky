/**
 * constants
 */
export const SET_MIN_TEMP = 'SET_MIN_TEMP';
export const SET_MAX_TEMP = 'SET_MAX_TEMP';
export const SET_MORNING_COMMUTE_START_TIME = 'SET_MORNING_COMMUTE_START_TIME';
export const SET_MORNING_COMMUTE_END_TIME = 'SET_MORNING_COMMUTE_END_TIME';
export const SET_EVENING_COMMUTE_START_TIME = 'SET_EVENING_COMMUTE_START_TIME';
export const SET_EVENING_COMMUTE_END_TIME = 'SET_EVENING_COMMUTE_END_TIME';


/**
 * action creators
 */
export const setMinTemp = temp => ({ type: SET_MIN_TEMP, temp });
export const setMaxTemp = temp => ({ type: SET_MAX_TEMP, temp });
export const setMorningCommuteStartTime = time => ({ type: SET_MORNING_COMMUTE_START_TIME, time });
export const setMorningCommuteEndTime = time => ({ type: SET_MORNING_COMMUTE_END_TIME, time });
export const setEveningCommuteStartTime = time => ({ type: SET_EVENING_COMMUTE_START_TIME, time });
export const setEveningCommuteEndTime = time => ({ type: SET_EVENING_COMMUTE_END_TIME, time });


/**
 * reducer
 */
export default (
  state = {
    minTemp: 30,
    maxTemp: 95,
    morningStartTime: { hours: 8, minutes: 0 },
    morningEndTime: { hours: 9, minutes: 0 },
    eveningStartTime: { hours: 5, minutes: 0 },
    eveningEndTime: { hours: 6, minutes: 0 }
  },
  action
) => {
  if (action.type === SET_MIN_TEMP) {
    return {
      ...state,
      minTemp: action.temp
    };
  } else if (action.type === SET_MAX_TEMP) {
    return {
      ...state,
      maxTemp: action.temp
    };
  }

  return state;
};


/**
 * epics
 */
