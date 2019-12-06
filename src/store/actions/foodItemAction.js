import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCH_GET_ONE_START = "FETCH_GET_ONE_START";
export const FETCH_GET_ONE_SUCCESS = "FETCH_GET_ONE_SUCCESS";
export const FETCH_GET_ONE_FAILURE = "FETCH_GET_ONE_FAILURE";
export const POST_FOOD_SUCCESS = "POST_FOOD_SUCCESS";
export const POST_FOOD_FAILURE = "POST_FOOD_FAILURE";

const LOCALHOST = "http://localhost:4000";

export const searchFoodItems = search_term => dispatch => {
  console.log(search_term);
  if (search_term !== "" || search_term.length !== 0) {
    dispatch({ type: FETCH_START });
    return axios
      .get(`${LOCALHOST}/fatsecret/search-food/${search_term}`)
      .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data });
        return true;
      })
      .catch(err => {
        //console.error(err);
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
    .get(`${LOCALHOST}/fatsecret/get-food/${food_id}`)
    .then(response => {
      dispatch({ type: FETCH_GET_ONE_SUCCESS, payload: response.data });
      return true;
    })
    .catch(error => {
      //console.log("catch error", error.response);
      dispatch({ type: FETCH_GET_ONE_FAILURE, payload: error.response });
      return false;
    });
};

export const addFoodItem = ({
  fatsecret_food_id,
  food_id,
  quantity,
  serving_id,
  time_zone_abbr,
  time_zone_name,
  time_consumed_at
}) => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .post(`${LOCALHOST}/log-entry/`, {
      fatsecret_food_id,
      food_id,
      quantity,
      serving_id,
      time_zone_abbr,
      time_zone_name,
      time_consumed_at
    })
    .then(response => {
      dispatch({ type: POST_FOOD_SUCCESS, payload: response.data });
    })
    .catch(e => console.error(e));
  //
};
