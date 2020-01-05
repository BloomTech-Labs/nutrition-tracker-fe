import {
  GET_MACROS_PROGRESS_START,
  GET_MACROS_PROGRESS_SUCCESS,
  GET_MACROS_PROGRESS_FAILURE
} from "../actions/macroProgress";

const initialState = {
  error: "",
  actual_fats: [],
  actual_carbs: [],
  actual_protein: [],
  target_fats: [],
  target_carbs: [],
  target_protein: [],
  labels: [],
  getting: false
};

export const macroProgressReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MACROS_PROGRESS_START:
      return {
        ...state,
        getting: true
      };
    case GET_MACROS_PROGRESS_SUCCESS:
      return {
        ...state,
        actual_fats: action.payload.actual_fats,
        actual_carbs: action.payload.actual_carbs,
        actual_protein: action.payload.actual_protein,
        target_fats: action.payload.target_fats,
        target_carbs: action.payload.target_carbs,
        target_protein: action.payload.target_protein,
        labels: action.payload.labels,
        getting: false
      };
    case GET_MACROS_PROGRESS_FAILURE:
      return {
        ...state,
        getting: false
      };

    default:
      return state;
  }
};
