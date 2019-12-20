import axios from "axios";

export const WEEKLY_MACRO_PROGRESS_START = "WEEKLY_MACRO_PROGRESS_START",
  WEEKLY_MACRO_PROGRESS_SUCCESS = "WEEKLY_MACRO_PROGRESS_SUCCESS",
  GET_WEEKLY_MACRO_PROGRESS_FAILURE = "GET_WEEKLY_MACRO_PROGRESS_FAILURE";

export const getWeeklyMacroProgress = user_id => dispatch => {
  dispatch({ type: WEEKLY_MACRO_PROGRESS_START });
  axios
    .get(`http://localhost:4000/progress/weekly-actuals/${user_id}`)
    .then(res =>
      dispatch({ type: WEEKLY_MACRO_PROGRESS_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({
        type: GET_WEEKLY_MACRO_PROGRESS_FAILURE,
        payload: err.message
      })
    );
};
