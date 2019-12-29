import axios from "axios";
import { backendURL } from "../../config/backendURL.js";

export const GET_WEIGHT_PROGRESS_START = "GET_WEIGHT_PROGRESS_START";
export const GET_WEIGHT_PROGRESS_SUCCESS = "GET_WEIGHT_PROGRESS_SUCCESS";
export const GET_WEIGHT_PROGRESS_FAILURE = "GET_WEIGHT_PROGRESS_FAILURE";

export const getWeightProgress = (
  user_id,
  time_zone,
  start_date,
  end_date
) => dispatch => {
  dispatch({ type: GET_WEIGHT_PROGRESS_START });
  axios
    .get(`${backendURL}/user/${user_id}`, {
      time_zone,
      start_date,
      end_date
    })
    .then(({ data }) => {
      dispatch({
        type: GET_WEIGHT_PROGRESS_SUCCESS,
        payload: {
          actualWeights: data.actualWeights,
          goalWeights: data.goalWeights
        }
      });
    })
    .catch(err => {
      dispatch({
        type: GET_WEIGHT_PROGRESS_FAILURE,
        err: err
      });
    });
};
