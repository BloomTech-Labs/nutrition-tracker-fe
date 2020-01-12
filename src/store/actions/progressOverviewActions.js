import axios from "axios";
import { backendURL } from "../../config/backendURL.js";

export const GET_WEIGHT_ACTUALS_START = "GET_WEIGHT_ACTUALS_START";
export const GET_WEIGHT_ACTUALS_SUCCESS = "GET_WEIGHT_ACTUALS_SUCCESS";
export const GET_WEIGHT_ACTUALS_FAILURE = "GET_WEIGHT_ACTUALS_FAILURE";

export const GET_WEIGHT_TARGETS_START = "GET_WEIGHT_TARGETS_START";
export const GET_WEIGHT_TARGETS_SUCCESS = "GET_WEIGHT_TARGETS_SUCCESS";
export const GET_WEIGHT_TARGETS_FAILURE = "GET_WEIGHT_TARGETS_FAILURE";

export const GET_AVERAGE_MACROS_START = "GET_AVERAGE_MACROS_START";
export const GET_AVERAGE_MACROS_SUCCESS = "GET_AVERAGE_MACROS_SUCCESS";
export const GET_AVERAGE_MACROS_FAILURE = "GET_AVERAGE_MACROS_FAILURE";

export const GET_CALORIES_CONSUMED_START = "GET_CALORIES_CONSUMED_START";
export const GET_CALORIES_CONSUMED_SUCCESS = "GET_CALORIES_CONSUMED_SUCCESS";
export const GET_CALORIES_CONSUMED_FAILURE = "GET_CALORIES_CONSUMED_FAILURE";

export const getWeightActuals = (
  user_id,
  time_zone,
  start_date,
  end_date,
  period
) => dispatch => {
  dispatch({ type: GET_WEIGHT_ACTUALS_START });
  axios
    .post(
      `${backendURL}/progress-reports/${user_id}/weight-actuals/${period}`,
      {
        time_zone,
        start_date,
        end_date
      }
    )
    .then(({ data }) => {
      dispatch({
        type: GET_WEIGHT_ACTUALS_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_WEIGHT_ACTUALS_FAILURE,
        err: err
      });
    });
};

export const getWeightTargets = (
  user_id,
  time_zone,
  start_date,
  end_date,
  period
) => dispatch => {
  dispatch({ type: GET_WEIGHT_TARGETS_START });
  axios
    .post(
      `${backendURL}/progress-reports/${user_id}/weight-targets/${period}`,
      {
        time_zone,
        start_date,
        end_date
      }
    )
    .then(({ data }) => {
      dispatch({
        type: GET_WEIGHT_TARGETS_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_WEIGHT_TARGETS_FAILURE,
        err: err
      });
    });
};

export const getCaloriesConsumed = (
  user_id,
  time_zone,
  start_date,
  end_date,
  period
) => dispatch => {
  dispatch({ type: GET_CALORIES_CONSUMED_START });
  axios
    .post(`${backendURL}/progress-reports/${user_id}/calories/${period}`, {
      time_zone,
      start_date,
      end_date
    })
    .then(({ data }) => {
      dispatch({
        type: GET_CALORIES_CONSUMED_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CALORIES_CONSUMED_FAILURE,
        err: err
      });
    });
};

export const getAverageMacrosConsumed = (user_id, start_date) => dispatch => {
  dispatch({ type: GET_AVERAGE_MACROS_START });
  axios
    .post(`${backendURL}/progress-reports/${user_id}/macros/average`, {
      start_date
    })
    .then(({ data }) => {
      dispatch({
        type: GET_AVERAGE_MACROS_SUCCESS,
        payload: {
          averageMacros: data.averageMacros
        }
      });
    })
    .catch(err => {
      dispatch({
        type: GET_AVERAGE_MACROS_FAILURE,
        err: err
      });
    });
};
