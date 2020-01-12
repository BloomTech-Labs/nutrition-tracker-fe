import {
  GET_AVERAGE_MACROS_FAILURE,
  GET_AVERAGE_MACROS_START,
  GET_AVERAGE_MACROS_SUCCESS,
  GET_CALORIES_CONSUMED_FAILURE,
  GET_CALORIES_CONSUMED_START,
  GET_CALORIES_CONSUMED_SUCCESS,
  GET_WEIGHT_ACTUALS_FAILURE,
  GET_WEIGHT_ACTUALS_START,
  GET_WEIGHT_ACTUALS_SUCCESS,
  GET_WEIGHT_TARGETS_FAILURE,
  GET_WEIGHT_TARGETS_START,
  GET_WEIGHT_TARGETS_SUCCESS
} from "../actions/progressOverviewActions";

/*
  "observation_date": "2020-01-25T05:00:00.000Z",
  "total_calories": "0",
  "caloric_budget": "2000.00"
*/

const initialState = {
  // WEIGHT PROGRESS OVER TIME
  weight_actuals: [],
  weight_targets: [],
  weight_labels: [],
  getWeightActualsStart: false,
  getWeightActualsSuccess: false,
  getWeightActualsFailure: false,
  getWeightTargetsStart: false,
  getWeightTargetsSuccess: false,
  getWeightTargetsFailure: false,
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
        getCaloriesConsumedStart: false,
        getCaloriesConsumedSuccess: false,
        getCaloriesConsumedFailure: true
      };
    }

    case GET_WEIGHT_ACTUALS_START: {
      return {
        ...state,
        getWeightActualsStart: true,
        getWeightActualsSuccess: false,
        getWeightActualsFailure: false
      };
    }

    case GET_WEIGHT_ACTUALS_SUCCESS: {
      return {
        ...state,
        weight_actuals: action.payload.actualWeights.map(record => {
          return record.actual_weight_lbs;
        }),
        getWeightActualsStart: false,
        getWeightActualsSuccess: true,
        getWeightActualsFailure: false
      };
    }

    case GET_WEIGHT_ACTUALS_FAILURE: {
      return {
        ...state,
        getWeightActualsStart: false,
        getWeightActualsSuccess: false,
        getWeightActualsFailure: true
      };
    }

    case GET_WEIGHT_TARGETS_START: {
      return {
        ...state,
        getWeightTargetsStart: true,
        getWeightTargetsSuccess: false,
        getWeightTargetsFailure: false
      };
    }

    case GET_WEIGHT_TARGETS_SUCCESS: {
      return {
        ...state,
        weight_targets: action.payload.targetWeights.map(record => {
          return record.target_goal_weight_lbs;
        }),
        weight_labels: action.payload.targetWeights.map(record => {
          return record.observation_date;
        }),
        getWeightTargetsStart: false,
        getWeightTargetsSuccess: true,
        getWeightTargetsFailure: false
      };
    }

    case GET_WEIGHT_TARGETS_FAILURE: {
      return {
        ...state,
        getWeightTargetsStart: false,
        getWeightTargetsSuccess: false,
        getWeightTargetsFailure: true
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
