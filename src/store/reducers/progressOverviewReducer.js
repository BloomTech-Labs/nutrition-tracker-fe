import {
  GET_AVERAGE_MACROS_FAILURE,
  GET_AVERAGE_MACROS_START,
  GET_AVERAGE_MACROS_SUCCESS,
  GET_CALORIES_CONSUMED_FAILURE,
  GET_CALORIES_CONSUMED_START,
  GET_CALORIES_CONSUMED_SUCCESS,
  GET_WEIGHT_PROGRESS_FAILURE,
  GET_WEIGHT_PROGRESS_START,
  GET_WEIGHT_PROGRESS_SUCCESS
} from "../actions/progressOverviewActions";

/*
  "observation_date": "2020-01-25T05:00:00.000Z",
  "total_calories": "0",
  "caloric_budget": "2000.00"
*/

const initialState = {
  // WEIGHT PROGRESS OVER TIME
  weightsOverTime: [],
  getWeightProgressStart: false,
  getWeightProgressSuccess: false,
  getWeightProgressFailure: false,
  // AVERAGE MACROS OVER TIME
  actual_calories: [],
  target_calories: [],
  getAverageMacrosStart: false,
  getAverageMacrosSuccess: false,
  getAverageMacrosFailure: false,
  // CALORIES OVER TIME
  averageMacros: {},
  getCaloriesConsumedStart: false,
  getCaloriesConsumedSuccess: false,
  getCaloriesConsumedFailure: false,
  calorie_labels: []
};

export const progressOverviewReducer = (state = initialState, action) => {
  const { weightsOverTime } = action.payload
    ? action.payload
    : initialState.weightsOverTime;

  const { averageMacros } = action.payload
    ? action.payload
    : initialState.averageMacros;

  switch (action.type) {
    case GET_CALORIES_CONSUMED_START: {
      return {
        ...state,
        getCaloriesConsumedStart: true,
        getCaloriesConsumedSuccess: false,
        getCaloriesConsumedFailure: false
      };
    }

    case GET_CALORIES_CONSUMED_SUCCESS: {
      return {
        ...state,
        actual_calories: action.payload.calories.map(record => {
          return record.total_calories;
        }),
        target_calories: action.payload.calories.map(record => {
          return record.caloric_budget;
        }),
        calorie_labels: action.payload.calories.map(record => {
          return record.observation_date;
        }),
        getCaloriesConsumedStart: false,
        getCaloriesConsumedSuccess: true,
        getCaloriesConsumedFailure: false
      };
    }

    case GET_CALORIES_CONSUMED_FAILURE: {
      return {
        ...state,
        weightsOverTime,
        getCaloriesConsumedStart: false,
        getCaloriesConsumedSuccess: false,
        getCaloriesConsumedFailure: true
      };
    }

    case GET_WEIGHT_PROGRESS_START: {
      return {
        ...state,
        weightsOverTime,
        getWeightProgressStart: true,
        getWeightProgressSuccess: false,
        getWeightProgressFailure: false
      };
    }

    case GET_WEIGHT_PROGRESS_SUCCESS: {
      return {
        ...state,
        weightsOverTime,
        getWeightProgressStart: false,
        getWeightProgressSuccess: true,
        getWeightProgressFailure: false
      };
    }

    case GET_WEIGHT_PROGRESS_FAILURE: {
      return {
        ...state,
        weightsOverTime,
        getWeightProgressStart: false,
        getWeightProgressSuccess: false,
        getWeightProgressFailure: true
      };
    }

    case GET_AVERAGE_MACROS_START: {
      return {
        ...state,
        averageMacros,
        getAverageMacrosStart: true,
        getAverageMacrosSuccess: false,
        getAverageMacrosFailure: false
      };
    }

    case GET_AVERAGE_MACROS_SUCCESS: {
      return {
        ...state,
        averageMacros,
        getAverageMacrosStart: false,
        getAverageMacrosSuccess: true,
        getAverageMacrosFailure: false
      };
    }

    case GET_AVERAGE_MACROS_FAILURE: {
      return {
        ...state,
        averageMacros,
        getAverageMacrosStart: false,
        getAverageMacrosSuccess: false,
        getAverageMacrosFailure: true
      };
    }

    default:
      return state;
  }
};
