import axios from "axios";

export const updateUserSettings = settingsObj => dispatch => {
  dispatch({ type: "UPDATE_SETTINGS_START" });
  axios
    .put(`url goes here`, settingsObj)
    .then(res => {
      dispatch({
        type: "UPDATE_SETTINGS_SUCCESS",
        payload: {
          height: res.height,
          weight: res.weight
        }
      });
    })
    .catch(err =>
      dispatch({ type: "UPDATE_SETTINGS_FAILURE", payload: err.message })
    );
};
