import {
  GET_AVERAGE_MACROS_FAILURE,
  GET_AVERAGE_MACROS_START,
  GET_AVERAGE_MACROS_SUCCESS,
  GET_WEIGHT_PROGRESS_FAILURE,
  GET_WEIGHT_PROGRESS_START,
  GET_WEIGHT_PROGRESS_SUCCESS
} from "../actions/progressOverviewActions";

const initialState = {
  weightsOverTime: [],
  averageMacros: {},
  getWeightProgressStart: false,
  getWeightProgressSuccess: false,
  getWeightProgressFailure: false,
  getAverageMacrosStart: false,
  getAverageMacrosSuccess: false,
  getAverageMacrosFailure: false
};

export const progressOverviewReducer = (state = initialState, action) => {
  const { weightsOverTime } = action.payload
    ? action.payload
    : initialState.weightsOverTime;

  const { averageMacros } = action.payload
    ? action.payload
    : initialState.averageMacros;

  switch (action.type) {
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
