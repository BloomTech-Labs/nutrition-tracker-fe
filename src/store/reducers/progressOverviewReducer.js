import {
  GET_WEIGHT_PROGRESS_FAILURE,
  GET_WEIGHT_PROGRESS_START,
  GET_WEIGHT_PROGRESS_SUCCESS
} from "../actions/progressOverviewActions";

const initialState = {
  weightsOverTime: [],
  getWeightProgressStart: false,
  getWeightProgressSuccess: false,
  getWeightProgressFailure: false
};

export const progressOverviewReducer = (state = initialState, action) => {
  const { weightsOverTime } = action.payload ? action.payload : initialState;

  switch (action.type) {
    case GET_WEIGHT_PROGRESS_START: {
      return {
        weightsOverTime,
        getWeightProgressStart: true,
        getWeightProgressSuccess: false,
        getWeightProgressFailure: false
      };
    }

    case GET_WEIGHT_PROGRESS_SUCCESS: {
      return {
        weightsOverTime,
        getWeightProgressStart: false,
        getWeightProgressSuccess: true,
        getWeightProgressFailure: false
      };
    }

    case GET_WEIGHT_PROGRESS_FAILURE: {
      return {
        weightsOverTime,
        getWeightProgressStart: false,
        getWeightProgressSuccess: false,
        getWeightProgressFailure: true
      };
    }

    default:
      return state;
  }
};
