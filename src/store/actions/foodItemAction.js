import axios from "axios";
import { backendURL } from "../../config/backendURL.js";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCH_GET_ONE_START = "FETCH_GET_ONE_START";
export const FETCH_GET_ONE_SUCCESS = "FETCH_GET_ONE_SUCCESS";
export const FETCH_GET_ONE_FAILURE = "FETCH_GET_ONE_FAILURE";
export const POST_FOOD_START = "POST_FOOD_START";
export const POST_FOOD_SUCCESS = "POST_FOOD_SUCCESS";
export const POST_FOOD_FAILURE = "POST_FOOD_FAILURE";
export const GET_FOOD_ITEM_FOR_EDIT_START = "GET_FOOD_ITEM_FOR_EDIT_START";
export const GET_FOOD_ITEM_FOR_EDIT_SUCCESS = "GET_FOOD_ITEM_FOR_EDIT_SUCCESS";
export const GET_FOOD_ITEM_FOR_EDIT_FAILURE = "GET_FOOD_ITEM_FOR_EDIT_FAILURE";
export const UPDATE_FOOD_ITEM_START =
  "UPDATE_FOOD_ITEM_START";
export const UPDATE_FOOD_ITEM_SUCCESS =
  "UPDATE_FOOD_ITEM_SUCCESS";
export const UPDATE_FOOD_ITEM_FAILURE =
  "UPDATE_FOOD_ITEM_FAILURE";
export const DELETE_FOOD_ITEM_START = "DELETE_FOOD_ITEM_START";
export const DELETE_FOOD_ITEM_SUCCESS = "DELETE_FOOD_ITEM_SUCCESS";
export const DELETE_FOOD_ITEM_FAILURE = "DELETE_FOOD_ITEM_FAILURE";
export const RESET_STATE = "RESET_STATE";

export const searchFoodItems = search_term => dispatch => {
  console.log(search_term);
  if (search_term !== "" || search_term.length !== 0) {
    dispatch({ type: FETCH_START });
    return axios
      .get(`${backendURL}/fatsecret/search-food/${search_term}`)
      .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data });
        return true;
      })
      .catch(err => {
        dispatch({ type: FETCH_FAILURE, payload: err.response });
        return false;
      });
  } else {
    dispatch({ type: FETCH_SUCCESS, payload: [] });
  }
};

export const getOneFoodItem = food_id => dispatch => {
  dispatch({ type: FETCH_GET_ONE_START });
  return axios
    .get(`${backendURL}/fatsecret/get-food/${food_id}`)
    .then(response => {
      dispatch({ type: FETCH_GET_ONE_SUCCESS, payload: response.data });
      return true;
    })
    .catch(error => {
      dispatch({ type: FETCH_GET_ONE_FAILURE, payload: error.response });
      return false;
    });
};

export const addFoodItem = (foodLog, firebaseID) => dispatch => {
  dispatch({ type: POST_FOOD_START });
  return axios
    .post(`${backendURL}/log-entry/${firebaseID}`, foodLog)
    .then(response => {
      dispatch({ type: POST_FOOD_SUCCESS, payload: response.data });
    })
    .catch(e => {
      dispatch({ type: POST_FOOD_FAILURE });
    });
};

export const getFoodItemForEdit = (foodLogID, user_id) => dispatch => {
  dispatch({ type: GET_FOOD_ITEM_FOR_EDIT_START });
  return axios
    .get(`${backendURL}/food-item/getfooditem/${foodLogID}/user/${user_id}`)
    .then(response => {
      dispatch({
        type: GET_FOOD_ITEM_FOR_EDIT_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({ type: GET_FOOD_ITEM_FOR_EDIT_FAILURE, payload: { error } });
    });
};

export const updateFoodItem = (foodItem, foodLogID, user_id) => dispatch => {
  dispatch({ type: UPDATE_FOOD_ITEM_START });
  return axios
    .put(
      `${backendURL}/food-item/updatefooditem/${foodLogID}/user/${user_id}`,
      foodItem
    )
    .then(response => {
      dispatch({ type: UPDATE_FOOD_ITEM_SUCCESS });
    })
    .catch(error => {
      dispatch({ type: UPDATE_FOOD_ITEM_FAILURE, payload: { error } });
    });
};

export const resetState = () => dispatch => {
  dispatch({ type: RESET_STATE });
};

export const deleteFoodItem = (foodLogID, user_id) => dispatch => {
  dispatch({ type: DELETE_FOOD_ITEM_START });
  return axios
    .delete(`${backendURL}/food-item/deletefooditem/${foodLogID}/user/${user_id}`)
    .then(response => {
      dispatch({ type: DELETE_FOOD_ITEM_SUCCESS });
    })
    .catch(error => {
      dispatch({ type: DELETE_FOOD_ITEM_FAILURE, payload: { error } });
    });
};
