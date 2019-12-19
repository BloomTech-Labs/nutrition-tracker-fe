//import axiosWithAuth from './axiosWithAuth';
import axios from "axios";

export const START_INSERT_WEIGHT = "START_INSERT_WEIGHT";
export const INSERT_WEIGHT_SUCCESS = "INSERT_WEIGHT_SUCCESS";
export const INSERT_WEIGHT_FAILURE = "INSERT_WEIGHT_FAILURE";
const dev = true // FOR US ARE WE IN THE DEVELOPMENT JOE / PAUL 
const BASE_URL = dev? "http://localhost:4000" : "https://nutri-journal.herokuapp.com";

export const recordUserWeight = (firebaseID, weight_kg) => dispatch => {
  dispatch({ type: START_INSERT_WEIGHT });
  return axios
    .post(`${BASE_URL}/user/${firebaseID}/current-weight`, {
      weight_kg
    })
    .then(res => dispatch({ type: INSERT_WEIGHT_SUCCESS, payload: res.data }))
    .catch(error =>
      dispatch({ type: INSERT_WEIGHT_FAILURE, payload: { error } })
    );
};
