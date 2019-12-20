import {
  WEEKLY_MACRO_PROGRESS_START,
  WEEKLY_MACRO_PROGRESS_SUCCESS,
  GET_WEEKLY_MACRO_PROGRESS_FAILURE
} from "../actions/macroProgress";

const initialState = {
  error: "",
  weekly_fats: [],
  weekly_carbs: [],
  weekly_protein: [],
  getting: false
};

export const macroProgressReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case GET_WEEKLY_MACRO_PROGRESS_FAILURE:
      return {
        ...state,
        getting: false
      };
    default:
      return state;
  }
};
