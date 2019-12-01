import axios from "axios";

//Gets specific user
export const getUserInfo = (id) => dispatch => {
  dispatch({ type: "GET_INFO_START" });
  axios
    .get(`http://localhost:4000/user/${id}`)
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
    .catch(err =>
      dispatch({ type: "GET_INFO_FAILURE", payload: err.message })
    );
};

//Updates user
//TODO: id is hard coded to 1 for testing. Need to pull
export const updateUserInfo = (infoObj) => dispatch => {
  dispatch({ type: "UPDATE_INFO_START" });
  const id = 1
  axios
    .put(`http://localhost:4000/user/${id}`, infoObj)
    .then(res => {
      dispatch({
        type: "UPDATE_INFO_SUCCESS",
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({ type: "UPDATE_INFO_FAILURE", payload: err.message })
    );
};

export const getCurrentWeight = (id) => dispatch => {
  dispatch({ type: "GET_CURRENT_WEIGHT_START" });
  axios
    .get(`http://localhost:4000/user/current-weight/${id}`)
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

//Updates current weight
//TODO: id is hard coded to 1 for testing. Need to pull
export const updateCurrentWeight = infoObj => dispatch => {
  dispatch({ type: "UPDATE_CURRENT_WEIGHT_START" });
  const id = 1
  axios
    .put(`http://localhost:4000/user/current-weight/${id}`, infoObj)
    .then(res => {
      dispatch({
        type: "UPDATE_CURRENT_WEIGHT_SUCCESS",
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({ type: "UPDATE_CURRENT_WEIGHT_FAILURE", payload: err.message })
    );
};
