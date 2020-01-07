import moment from "moment-timezone";

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
        actual_fats: action.payload.fatMacros.map(record => {
          return record.actual_fat_macros;
        }),
        actual_carbs: action.payload.carbMacros.map(record => {
          return record.actual_carbs_macros;
        }),
        actual_protein: action.payload.proteinMacros.map(record => {
          return record.actual_protein_macros;
        }),
        target_fats: action.payload.fatMacros.map(record => {
          return record.goal_fat_macros;
        }),
        target_carbs: action.payload.carbMacros.map(record => {
          return record.goal_carbs_macros;
        }),
        target_protein: action.payload.proteinMacros.map(record => {
          return record.goal_protein_macros;
        }),
        labels: action.payload.fatMacros.map(record => {
          return moment(record.observation_date).format("MM/DD");
        }),
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
