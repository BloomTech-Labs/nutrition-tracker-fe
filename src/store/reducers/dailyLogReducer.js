import {
  FETCH_NUTRITION_BUDGETS_START,
  FETCH_NUTRITION_BUDGETS_SUCCESS,
  FETCH_NUTRITION_BUDGETS_FAILURE,
  FETCH_DAILY_LOG_START,
  FETCH_DAILY_LOG_SUCCESS,
  FETCH_DAILY_LOG_FAILURE
} from "../actions/dailyLogActions";

const initialState = {
  budgets: {
    caloricBudget: 0,
    fatBudget: 0,
    carbBudget: 0,
    proteinBudget: 0
  },
  consumed: {
    caloriesConsumed: 0,
    fatsConsumed: 0,
    carbsConsumed: 0,
    proteinConsumed: 0
  },
  dailyLog: [],
  fetchBudgetStart: false,
  fetchBudgetSuccess: false,
  fetchBudgetFailure: false,
  fetchDailyLogStart: false,
  fetchDailyLogError: false,
};

export const dailyLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NUTRITION_BUDGETS_START: {
      return {
        ...state,
        fetchBudgetStart: true,
        fetchBudgetFailure: false,
        budgets: []
      };
    }

    case FETCH_NUTRITION_BUDGETS_SUCCESS: {
      return {
        ...state,
        fetchBudgetStart: false,
        fetchBudgetFailure: false,
        budgets: action.payload
      };
    }

    case FETCH_NUTRITION_BUDGETS_FAILURE: {
      return {
        ...state,
        fetchBudgetStart: false,
        fetchBudgetFailure: true,
        budgets: []
      };
    }

    case FETCH_DAILY_LOG_START: {
      return {
        ...state,
        fetchDailyLogStart: true,
        fetchDailyLogSuccess: false,
        fetchDailyLogError: false,
        consumed: [],
        dailyLog: []
      };
    }

    case FETCH_DAILY_LOG_SUCCESS: {
      return {
        ...state,
        fetchDailyLogStart: false,
        fetchDailyLogSuccess: true,
        fetchDailyLogError: false,
        consumed: action.payload.consumed,
        dailyLog: action.payload.dailyLog
      };
    }

    case FETCH_DAILY_LOG_FAILURE: {
      return {
        ...state,
        fetchDailyLogStart: false,
        fetchDailyLogSuccess: false,
        fetchDailyLogError: true,
        consumed: [],
        dailyLog: []
      };
    }

    default:
      return state;
  }
};
