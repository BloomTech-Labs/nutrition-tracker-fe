import axios from "axios";
import { backendURL } from "../../config/backendURL.js";

/********************************************************
 *                    User Actions                      *
 ********************************************************/
//Gets specific user
export const getUserInfo = id => dispatch => {
  dispatch({ type: "GET_INFO_START" });
  axios
    .get(`${backendURL}/user/${id}`)
    .then(res => {
      dispatch({
        type: "GET_INFO_SUCCESS",
        payload: {
          id: res.data.id,
          firebase_id: res.data.firebase_id,
          email: res.data.email,
          dob: res.data.dob,
          height: {
            feet: res.data.height.feet,
            inches: res.data.height.inches
          },
          height_cm: res.data.height_cm,
          weight: res.data.weight,
          sex: res.data.sex
        }
      });
    })
    .catch(err => dispatch({ type: "GET_INFO_FAILURE", payload: err.message }));
};

//Updates user
export const updateUserInfo = (infoObj, id) => dispatch => {
  dispatch({ type: "UPDATE_INFO_START" });
  axios
    .put(`${backendURL}/user/${id}`, infoObj)
    .then(res => {
      console.log("UPDATE USER INFO RES DATA:", res.data);
      dispatch({
        type: "UPDATE_INFO_SUCCESS",
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({ type: "UPDATE_INFO_FAILURE", payload: err.message })
    );
};

/********************************************************
 *                Current Weight Actions                *
 ********************************************************/
//Gets user's current weight
export const getCurrentWeight = id => dispatch => {
  dispatch({ type: "GET_CURRENT_WEIGHT_START" });
  axios
    .get(`${backendURL}/user/${id}/current-weight`)
    .then(res => {
      dispatch({
        type: "GET_CURRENT_WEIGHT_SUCCESS",
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({ type: "GET_CURRENT_WEIGHT_FAILURE", payload: err.message })
    );
};

//Updates user's current weight
export const updateCurrentWeight = (infoObj, id) => dispatch => {
  dispatch({ type: "ADD_CURRENT_WEIGHT_START" });
  console.log("KNJONO:INONIOIN",infoObj)
  axios
    .post(`${backendURL}/user/${id}/current-weight`, infoObj)
    .then(res => {
      dispatch({
        type: "ADD_CURRENT_WEIGHT_SUCCESS",
        payload: {
          actual_weight_lbs: res.data.actual_weight_lbs
        }
      });
    })
    .catch(err =>
      dispatch({ type: "ADD_CURRENT_WEIGHT_FAILURE", payload: err.message })
    );
};

/********************************************************
 *               Activity Level Actions                 *
 ********************************************************/
//Gets user's activity level
export const getActivityLevel = id => dispatch => {
  dispatch({ type: "GET_ACTIVITY_LEVEL_START" });
  axios
    .get(`${backendURL}/user/${id}/activity-level`)
    .then(res => {
      dispatch({
        type: "GET_ACTIVITY_LEVEL_SUCCESS",
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({ type: "GET_ACTIVITY_LEVEL_FAILURE", payload: err.message })
    );
};

//Updates user's activity level
export const updateActivityLevel = (infoObj, id) => dispatch => {
  dispatch({ type: "ADD_ACTIVITY_LEVEL_START" });
  axios
    .post(`${backendURL}/user/${id}/activity-level`, infoObj)
    .then(res => {
      dispatch({
        type: "ADD_ACTIVITY_LEVEL_SUCCESS",
        payload: {
          activity_level: res.data.activity_level
        }
      });
    })
    .catch(err =>
      dispatch({ type: "ADD_ACTIVITY_LEVEL_FAILURE", payload: err.message })
    );
};

/********************************************************
 *                   Macro Actions                      *
 ********************************************************/
//Gets user's macros
export const getMacros = id => dispatch => {
  dispatch({ type: "GET_MACROS_START" });
  axios
    .get(`${backendURL}/user/${id}/macro-ratios`)
    .then(res => {
      dispatch({
        type: "GET_MACROS_SUCCESS",
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({ type: "GET_MACROS_FAILURE", payload: err.message })
    );
};

//Updates user's macros
export const updateMacros = (infoObj, id) => dispatch => {
  dispatch({ type: "ADD_MACROS_START" });
  axios
    .post(`${backendURL}/user/${id}/macro-ratios`, infoObj)
    .then(res => {
      dispatch({
        type: "ADD_MACROS_SUCCESS",
        payload: {
          fat_ratio: res.data.fat_ratio,
          protein_ratio: res.data.protein_ratio,
          carb_ratio: res.data.carb_ratio
        }
      });
    })
    .catch(err =>
      dispatch({ type: "ADD_MACROS_FAILURE", payload: err.message })
    );
};

/********************************************************
 *                  Weight Goal Actions                 *
 ********************************************************/
//Gets user's macros
export const getWeightGoal = id => dispatch => {
  dispatch({ type: "GET_WEIGHT_GOAL_START" });
  axios
    .get(`${backendURL}/user/${id}/weight-goal`)
    .then(res => {
      dispatch({
        type: "GET_WEIGHT_GOAL_SUCCESS",
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({ type: "GET_WEIGHT_GOAL_FAILURE", payload: err.message })
    );
};

//Updates user's macros
export const updateWeightGoal = (infoObj, id) => dispatch => {
  dispatch({ type: "ADD_WEIGHT_GOAL_START" });
  console.log("OBJECT",infoObj)
  axios
    .post(`${backendURL}/user/${id}/weight-goal`, infoObj)
    .then(res => {
      dispatch({
        type: "ADD_WEIGHT_GOAL_SUCCESS",
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({ type: "ADD_WEIGHT_GOAL_FAILURE", payload: err.message })
    );
};
