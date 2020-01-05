import axios from "axios";
import { backendURL } from "../../config/backendURL.js";

export const getMacroProgress = (
  user_id,
  time_zone,
  start_date,
  end_date,
  period
) => dispatch => {
  dispatch({ type: GET_MACROS_PROGRESS_START });
  axios
    .post(`${backendURL}/progress-reports/${user_id}/weight/${period}`, {
      time_zone,
      start_date,
      end_date
    })
    .then(({ data }) => {
      dispatch({
        type: GET_MACROS_PROGRESS_SUCCESS,
        payload: {
          fats: data.fats,
          carbs: data.carbs,
          protein: data.protein
        }
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MACROS_PROGRESS_FAILURE,
        err: err
      });
    });
};
