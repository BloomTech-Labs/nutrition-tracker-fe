//import axiosWithAuth from "./AxiosWithAuth";
import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getOneEvent = food_id => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth()
    .get(`https://corporate-event-planner.herokuapp.com/events/${food_id}`)
    .then(event => {
      dispatch({ type: FETCH_SUCCESS, payload: event.data });
    })
    .catch(error => {
      console.log("catch error", error.response);
    });
};
