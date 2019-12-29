export const SET_TIME_PERIOD_WEEKLY = "SET_TIME_PERIOD_WEEKLY";
export const SET_TIME_PERIOD_MONTLY = "SET_TIME_PERIOD_MONTLY";
export const SET_TIME_PERIOD_QUARTERLY = "SET_TIME_PERIOD_QUARTERLY";
export const SET_TIME_PERIOD_BIANNUAL = "SET_TIME_PERIOD_BIANNUAL";

export const setProgressPeriodWeekly = period => dispatch => {
  dispatch({ type: SET_TIME_PERIOD_WEEKLY });
};

export const setProgressPeriodMonthly = () => dispatch => {
  dispatch({ type: SET_TIME_PERIOD_MONTLY });
};

export const setProgressPeriodQuarterly = () => dispatch => {
  dispatch({ type: SET_TIME_PERIOD_QUARTERLY });
};

export const setProgressPeriodBiannual = () => dispatch => {
  dispatch({ type: SET_TIME_PERIOD_BIANNUAL });
};
