import axios from "axios";

//Updates user
export const updateUserInfo = infoObj => dispatch => {
  console.log(infoObj)
  dispatch({ type: "UPDATE_INFO_START" });
  axios
    .put(`http://localhost:4000/user/1`, infoObj)
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
