//import axiosWithAuth from './axiosWithAuth';
import axios from "axios";

export const START_INSERT_WEIGHT = "START_INSERT_WEIGHT";
export const INSERT_WEIGHT_SUCCESS = "INSERT_WEIGHT_SUCCESS";
export const INSERT_WEIGHT_FAILURE = "INSERT_WEIGHT_FAILURE";

export const recordUserWeight = (firebaseID, actual_weight_kg) => dispatch => {
  dispatch({ type: START_INSERT_WEIGHT });
  return axios
    .post(`https://nutri-journal.herokuapp.com/user/${firebaseID}/current-weight`, {
      actual_weight_kg
    })
    .then(res => dispatch({ type: INSERT_WEIGHT_SUCCESS, payload: res.data }))
    .catch(error =>
      dispatch({ type: INSERT_WEIGHT_FAILURE, payload: { error } })
    );
};
