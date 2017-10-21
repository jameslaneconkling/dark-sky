/**
 * constants
 */
export const SET_MIN_TEMP = 'SET_MIN_TEMP';
export const SET_MAX_TEMP = 'SET_MAX_TEMP';


/**
 * action creators
 */
export const setMinTemp = temp => ({ type: SET_MIN_TEMP, temp });
export const setMaxTemp = temp => ({ type: SET_MAX_TEMP, temp });


/**
 * reducer
 */
export default (
  state = {
    minTemp: 30,
    maxTemp: 100
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
