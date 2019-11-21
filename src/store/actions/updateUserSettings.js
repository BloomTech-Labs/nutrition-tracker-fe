import axios from "axios";

export const updateUserInfo = infoObj => dispatch => {
  dispatch({ type: "UPDATE_INFO_START" });
  axios
    .put(`localhost:4000/updateUserSettings`, infoObj)
    .then(res => {
      dispatch({
        type: "UPDATE_INFO_SUCCESS",
        payload: infoObj
      });
    })
    .catch(err =>
      dispatch({ type: "UPDATE_INFO_FAILURE", payload: err.message })
    );
};

export const getUserInfo = id => dispatch => {
  dispatch({ type: "GET_INFO_START" });
  axios
    .get(`localhost:4000/updateUserSettings/${id}`,)
    .then(res => {
      dispatch({
        type: "GET_INFO_SUCCESS",
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({ type: "GET_INFO_FAILURE", payload: err.message })
    );
};
