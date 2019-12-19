import axios from "axios";

export const FETCH_NUTRITION_BUDGETS_START = "FETCH_NUTRITION_BUDGETS_START";
export const FETCH_NUTRITION_BUDGETS_SUCCESS = "FETCH_NUTRITION_BUDGETS_SUCCESS";
export const FETCH_NUTRITION_BUDGETS_FAILURE = "FETCH_NUTRITION_BUDGETS_FAILURE";
export const FETCH_DAILY_LOG_START = "FETCH_DAILY_LOG_START";
export const FETCH_DAILY_LOG_SUCCESS = "FETCH_DAILY_LOG_SUCCESS";
export const FETCH_DAILY_LOG_FAILURE = "FETCH_DAILY_LOG_FAILURE";
export const UPDATE_CURRENT_DATE = "UPDATE_CURRENT_DATE";
export const UPDATE_CURRENT_TIMEZONE = "UPDATE_CURRENT_TIMEZONE";
const dev = true // FOR US ARE WE IN THE DEVELOPMENT JOE / PAUL 
const BASE_URL = dev? "http://localhost:4000" : "https://nutri-journal.herokuapp.com";

export const fetchNutritionBudgets = userID => dispatch => {
  dispatch({ type: FETCH_NUTRITION_BUDGETS_START });
  axios.get(`${BASE_URL}/daily-log/${userID}/nutrition-budgets/`) 
    .then(({data}) => {
      dispatch({
        type: FETCH_NUTRITION_BUDGETS_SUCCESS,
        payload: {
          caloricBudget: data.caloricBudget,
          fatBudget: data.fatBudget,
          carbBudget: data.carbBudget,
          proteinBudget: data.proteinBudget,
        }
      })
    })
    .catch(err => {
      dispatch({type: FETCH_NUTRITION_BUDGETS_FAILURE})
    })
};

export const fetchDailyLog = (userID, date, currentTimeZone) => dispatch => {
  dispatch({ type: FETCH_DAILY_LOG_START });

  currentTimeZone = encodeURIComponent(currentTimeZone);

  axios.get(`${BASE_URL}/daily-log/${userID}/${date}/${currentTimeZone}`)
    .then(({data}) => {
      dispatch({
        type: FETCH_DAILY_LOG_SUCCESS,
        payload: {
          consumed: {
            caloriesConsumed: data.caloriesConsumed,
            fatsConsumed: data.fatsConsumed,
            carbsConsumed: data.carbsConsumed,
            proteinConsumed: data.proteinConsumed,
          },
          dailyLog: data.dailyLog
        }
      })
    })
    .catch(err => {
      dispatch({type: FETCH_DAILY_LOG_FAILURE})
    })
};

export const updateCurrentDate = currentDate => dispatch => {
  dispatch({
    type: UPDATE_CURRENT_DATE,
    payload: currentDate
  })
}

export const updateCurrentTimeZone = currentTimeZone => dispatch => {
  dispatch({
    type: UPDATE_CURRENT_TIMEZONE,
    payload: currentTimeZone
  })
}

