import {
  GET_WEIGHT_PROGRESS_FAILURE,
  GET_WEIGHT_PROGRESS_START,
  GET_WEIGHT_PROGRESS_SUCCESS
} from "../actions/progressOverviewActions";

const initialState = {
  actualWeights: [],
  goalWeights: [],
  getWeightProgressStart: false,
  getWeightProgressSuccess: false,
  getWeightProgressFailure: false
};

export const progressOverviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEIGHT_PROGRESS_START: {
      return {
        ...state,
        actualWeights: true,
        goalWeights: false,
        getWeightProgressStart: true,
        getWeightProgressSuccess: false,
        getWeightProgressFailure: false
      };
    }

    case GET_WEIGHT_PROGRESS_SUCCESS: {
      return {
        ...state,
        actualWeights: true,
        goalWeights: false,
        getWeightProgressStart: false,
        getWeightProgressSuccess: true,
        getWeightProgressFailure: false
      };
    }

    case GET_WEIGHT_PROGRESS_FAILURE: {
      return {
        ...state,
        actualWeights: true,
        goalWeights: false,
        getWeightProgressStart: false,
        getWeightProgressSuccess: false,
        getWeightProgressFailure: true
      };
    }

    default:
      return state;
  }
};
