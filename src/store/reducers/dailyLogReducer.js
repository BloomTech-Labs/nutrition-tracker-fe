import moment from "moment-timezone";
import {
  FETCH_DAILY_LOG_FAILURE,
  FETCH_DAILY_LOG_START,
  FETCH_DAILY_LOG_SUCCESS,
  FETCH_NUTRITION_BUDGETS_FAILURE,
  FETCH_NUTRITION_BUDGETS_START,
  FETCH_NUTRITION_BUDGETS_SUCCESS,
  UPDATE_CURRENT_DATE,
  UPDATE_CURRENT_TIMEZONE
} from "../actions/dailyLogActions";

const currentTimeZone = moment.tz.guess();
const currentDate = moment.tz(currentTimeZone).format("YYYY-MM-DD");

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
  fetchDailyLogSuccess: false,
  fetchDailyLogError: false,
  currentDate: currentDate,
  currentTimeZone
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

    case UPDATE_CURRENT_DATE: {
      return {
        ...state,
        currentDate: action.payload
      }
    }

    case UPDATE_CURRENT_TIMEZONE: {
      return {
        ...state,
        currentTimeZone: action.payload
      }
    }

    default:
      return state;
  }
};
