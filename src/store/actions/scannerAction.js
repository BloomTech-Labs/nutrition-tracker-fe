import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

const LOCALHOST = "http://localhost:4000";

export const searchBarcode = barcode => dispatch => {
  console.log("Barcode is: ", barcode);
  if (barcode) {
    return axios
      .get(`${LOCALHOST}/fatsecret/scanner/get-food/${barcode}`)
      .then(response => {
        return response.data[0].fatsecret_food_id;
      })
      .catch(err => {
        return null;
      });
  } else {
    dispatch({ type: FETCH_SUCCESS, payload: [] });
  }
};
