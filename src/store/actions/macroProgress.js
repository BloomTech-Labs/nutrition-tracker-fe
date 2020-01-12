import axios from "axios";
import { backendURL } from "../../config/backendURL.js";

export const GET_MACROS_PROGRESS_START = "GET_MACROS_PROGRESS_START",
  GET_MACROS_PROGRESS_SUCCESS = "GET_MACROS_PROGRESS_SUCCESS",
  GET_MACROS_PROGRESS_FAILURE = "GET_MACROS_PROGRESS_FAILURE";

export const getMacroProgress = (
  user_id,
  time_zone,
  start_date,
  end_date,
  period
) => dispatch => {
  dispatch({
    type: GET_MACROS_PROGRESS_START,
    payload: {
      user_id: user_id,
      time_zone: time_zone,
      start_date: start_date,
      end_date: end_date,
      period: period
    }
  });
  axios
    .post(
      `${backendURL}/progress-reports/${user_id}/macros-breakdown/${period}`,
      {
        time_zone,
        start_date,
        end_date
      }
    )
    .then(({ data }) => {
      console.log("MACROS DATA:", data);
      dispatch({
        type: GET_MACROS_PROGRESS_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MACROS_PROGRESS_FAILURE,
        err: err
      });
    });
};
