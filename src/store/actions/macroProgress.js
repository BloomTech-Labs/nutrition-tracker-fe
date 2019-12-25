import axios from "axios";

export const WEEKLY_MACRO_PROGRESS_START = "WEEKLY_MACRO_PROGRESS_START",
  WEEKLY_MACRO_PROGRESS_SUCCESS = "WEEKLY_MACRO_PROGRESS_SUCCESS",
  WEEKLY_MACRO_PROGRESS_FAILURE = "WEEKLY_MACRO_PROGRESS_FAILURE",
  MONTHLY_MACRO_PROGRESS_START = "MONTHLY_MACRO_PROGRESS_START",
  MONTHLY_MACRO_PROGRESS_SUCCESS = "MONTHLY_MACRO_PROGRESS_SUCCESS",
  MONTHLY_MACRO_PROGRESS_FAILURE = "MONTHLY_MACRO_PROGRESS_FAILURE",
  QUARTERLY_MACRO_PROGRESS_START = "QUARTERLY_MACRO_PROGRESS_START",
  QUARTERLY_MACRO_PROGRESS_SUCCESS = "QUARTERLY_MACRO_PROGRESS_SUCCESS",
  QUARTERLY_MACRO_PROGRESS_FAILURE = "QUARTERLY_MACRO_PROGRESS_FAILURE",
  BIANNUAL_MACRO_PROGRESS_START = "BIANNUAL_MACRO_PROGRESS_START",
  BIANNUAL_MACRO_PROGRESS_SUCCESS = "BIANNUAL_MACRO_PROGRESS_SUCCESS",
  BIANNUAL_MACRO_PROGRESS_FAILURE = "BIANNUAL_MACRO_PROGRESS_FAILURE";

export const getWeeklyMacroProgress = user_id => dispatch => {
  dispatch({ type: WEEKLY_MACRO_PROGRESS_START });
  axios
    .get(`http://localhost:4000/progress/weekly-actuals/${user_id}`)
    .then(res =>
      dispatch({ type: WEEKLY_MACRO_PROGRESS_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({
        type: WEEKLY_MACRO_PROGRESS_FAILURE,
        payload: err.message
      })
    );
};

export const getMonthlyMacroProgress = user_id => dispatch => {
  dispatch({ type: MONTHLY_MACRO_PROGRESS_START });
  axios
    .get(`http://localhost:4000/progress/monthly-actuals/${user_id}`)
    .then(res =>
      dispatch({
        type: MONTHLY_MACRO_PROGRESS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: MONTHLY_MACRO_PROGRESS_FAILURE,
        payload: err.message
      })
    );
};

export const getQuarterlyMacroProgress = user_id => dispatch => {
  dispatch({ type: QUARTERLY_MACRO_PROGRESS_START });
  axios
    .get(`http://localhost:4000/progress/quarterly-actuals/${user_id}`)
    .then(res =>
      dispatch({
        type: QUARTERLY_MACRO_PROGRESS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: QUARTERLY_MACRO_PROGRESS_FAILURE,
        payload: err.message
      })
    );
};

export const getBiannualMacroProgress = user_id => dispatch => {
  dispatch({ type: BIANNUAL_MACRO_PROGRESS_START });
  axios
    .get(`http://localhost:4000/progress/biannual-actuals/${user_id}`)
    .then(res =>
      dispatch({
        type: BIANNUAL_MACRO_PROGRESS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: BIANNUAL_MACRO_PROGRESS_FAILURE,
        payload: err.message
      })
    );
};
