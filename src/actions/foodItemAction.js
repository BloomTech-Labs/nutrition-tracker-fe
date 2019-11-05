import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

const LOCALHOST = 'http://localhost:4000'

export const searchFoodItems = search_term => dispatch => {
  console.log(search_term);
  if(search_term !== '' || search_term.length != 0) {
    dispatch({ type: FETCH_START });
    axios.get(`${LOCALHOST}/fatsecret/search-food/${search_term}`)
      .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data })
      })
      .catch(err => console.error(err));
  } else {
    dispatch({ type: FETCH_SUCCESS, payload: []})
  }
}

export const getOneFoodItem = food_id => dispatch => {
  dispatch({ type: FETCH_START });
    axios
    .get(`${LOCALHOST}/fatsecret/get-food/${food_id}`)
    .then(event => {
      dispatch({ type: FETCH_SUCCESS, payload: event.data });
    })
    .catch(error => {
      console.log("catch error", error.response);
    });
};
