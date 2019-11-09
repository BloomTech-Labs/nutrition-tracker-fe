import {
  UPDATE_SEX,
  UPDATE_ACTIVITY_LEVEL,
  UPDATE_BASIC_INFO,
  UPDATE_WEIGHT_GOAL
} from "../actions/onboardingActions";

const initialState = {
  sex: "",
  weight_kg: 0,
  height_cm: 0,
  date_of_birth: "",
  activityLevel: 0,
  target_weight: 0,
  target_date: "",
  target_rate: 0
};

const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEX: {
      return {
        ...state,
        sex: action.payload
      };
    }
    case UPDATE_ACTIVITY_LEVEL: {
      return {
        ...state,
        activityLevel: action.payload
      };
    }
    case UPDATE_BASIC_INFO: {
      const { date_of_birth, height, weight } = action.payload;
      return {
        ...state,
        date_of_birth,
        height,
        weight
      };
    }
    case UPDATE_WEIGHT_GOAL: {
      const { target_weight, target_date, target_rate } = action.payload;
      return {
        ...state,
        target_weight,
        target_date,
        target_rate
      };
    }
    default:
      return state;
  }
};

export default onboardingReducer;
