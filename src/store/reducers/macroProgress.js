import {
  WEEKLY_MACRO_PROGRESS_START,
  WEEKLY_MACRO_PROGRESS_SUCCESS,
  WEEKLY_MACRO_PROGRESS_FAILURE,
  MONTHLY_MACRO_PROGRESS_START,
  MONTHLY_MACRO_PROGRESS_SUCCESS,
  MONTHLY_MACRO_PROGRESS_FAILURE,
  QUARTERLY_MACRO_PROGRESS_START,
  QUARTERLY_MACRO_PROGRESS_SUCCESS,
  QUARTERLY_MACRO_PROGRESS_FAILURE,
  BIANNUAL_MACRO_PROGRESS_START,
  BIANNUAL_MACRO_PROGRESS_SUCCESS,
  BIANNUAL_MACRO_PROGRESS_FAILURE
} from "../actions/macroProgress";

const initialState = {
  error: "",
  weekly_fats: [],
  weekly_carbs: [],
  weekly_protein: [],
  monthly_fats: [],
  monthly_carbs: [],
  monthly_protein: [],
  quarterly_fats: [],
  quarterly_carbs: [],
  quarterly_protein: [],
  biannual_fats: [],
  biannual_carbs: [],
  biannual_protein: [],
  getting: false
};

export const macroProgressReducer = (state = initialState, action) => {
  switch (action.type) {
    // WEEKLY

    case WEEKLY_MACRO_PROGRESS_START:
      return {
        ...state,
        getting: true
      };
    case WEEKLY_MACRO_PROGRESS_SUCCESS:
      return {
        ...state,
        weekly_fats: action.payload.fats,
        weekly_carbs: action.payload.carbs,
        weekly_protein: action.payload.protein,
        getting: false
      };
    case WEEKLY_MACRO_PROGRESS_FAILURE:
      return {
        ...state,
        getting: false
      };

    // MONTHLY

    case MONTHLY_MACRO_PROGRESS_START:
      return {
        ...state,
        getting: true
      };
    case MONTHLY_MACRO_PROGRESS_SUCCESS:
      return {
        ...state,
        monthly_fats: action.payload.fats,
        monthly_carbs: action.payload.carbs,
        monthly_protein: action.payload.protein,
        getting: false
      };
    case MONTHLY_MACRO_PROGRESS_FAILURE:
      return {
        ...state,
        getting: false
      };

    // QUARTERLY

    case QUARTERLY_MACRO_PROGRESS_START:
      return {
        ...state,
        getting: true
      };
    case QUARTERLY_MACRO_PROGRESS_SUCCESS:
      return {
        ...state,
        quarterly_fats: action.payload.fats,
        quarterly_carbs: action.payload.carbs,
        quarterly_protein: action.payload.protein,
        getting: false
      };
    case QUARTERLY_MACRO_PROGRESS_FAILURE:
      return {
        ...state,
        getting: false
      };

    // BIANNUAL

    case BIANNUAL_MACRO_PROGRESS_START:
      return {
        ...state,
        getting: true
      };
    case BIANNUAL_MACRO_PROGRESS_SUCCESS:
      return {
        ...state,
        biannual_fats: action.payload.fats,
        biannual_carbs: action.payload.carbs,
        biannual_protein: action.payload.protein,
        getting: false
      };
    case BIANNUAL_MACRO_PROGRESS_FAILURE:
      return {
        ...state,
        getting: false
      };

    default:
      return state;
  }
};
