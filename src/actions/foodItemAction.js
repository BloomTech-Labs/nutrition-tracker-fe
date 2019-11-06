import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCH_GET_ONE_START = "FETCH_GET_ONE_START";
export const FETCH_GET_ONE_SUCCESS = "FETCH_GET_ONE_SUCCESS";
export const FETCH_GET_ONE_FAILURE = "FETCH_GET_ONE_FAILURE";

const LOCALHOST = 'http://localhost:4000'

export const searchFoodItems = search_term => dispatch => {
  console.log(search_term);
  if(search_term !== '' || search_term.length !== 0) {
    dispatch({ type: FETCH_START });
    return axios.get(`${LOCALHOST}/fatsecret/search-food/${search_term}`)
      .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data });
        return true;
      })
      .catch(err => {
        console.error(err);
        return false;
      });
  } else {
    dispatch({ type: FETCH_SUCCESS, payload: []})
  }
}

export const getOneFoodItem = food_id => dispatch => {
  dispatch({ type: FETCH_GET_ONE_START });
  return axios
    .get(`${LOCALHOST}/fatsecret/get-food/${food_id}`)
    .then(response => {
      dispatch({ type: FETCH_GET_ONE_SUCCESS , payload: response.data.food });
      return true;
    })
    .catch(error => {
      console.log("catch error", error.response);
      dispatch({ type: FETCH_GET_ONE_FAILURE , payload: error.response });
      return false;
    });
};
