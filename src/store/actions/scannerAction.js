import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

const LOCALHOST = "https://nutri-journal.herokuapp.com";

export const searchBarcode = barcode => dispatch => {
  console.log("Barcode is: ", barcode);
  if (barcode) {
    dispatch({ type: FETCH_START });
    return axios
      .get(`${LOCALHOST}/fatsecret/scanner/get-food/${barcode}`)
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


