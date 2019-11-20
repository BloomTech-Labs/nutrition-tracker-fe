import {
  UPDATE_DAILY_GOAL,
  UPDATE_SEX,
  UPDATE_ACTIVITY_LEVEL,
  UPDATE_BASIC_INFO,
  UPDATE_WEIGHT_GOAL
} from "../actions/onboardingActions";

const initialState = {
  daily_goal: "",
  sex: "",
  weight_kg: 0,
  height_cm: 0,
  date_of_birth: "",
  activityLevel: 0,
  target_weight_kg: 0,
  target_date: "",
  target_rate: 0
};

export const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DAILY_GOAL: {
      return {
        ...state,
        daily_goal: action.payload
      };
    }

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
        date_of_birth: date_of_birth,
        height_cm: height,
        weight_kg: weight
      };
    }

    case UPDATE_WEIGHT_GOAL: {
      const { target_weight_kg, target_date, target_rate } = action.payload;
      return {
        ...state,
        target_weight_kg: target_weight_kg,
        target_date: target_date,
        target_rate: target_rate
      };
    }

    default:
      return state;
  }
};
