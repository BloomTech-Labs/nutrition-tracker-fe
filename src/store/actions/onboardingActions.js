export const UPDATE_DAILY_GOAL = "UPDATE_DAILY_GOAL",
  UPDATE_SEX = "UPDATE_SEX",
  UPDATE_ACTIVITY_LEVEL = "UPDATE_ACTIVITY_LEVEL",
  UPDATE_BASIC_INFO = "UPDATE_BASIC_INFO",
  UPDATE_WEIGHT_GOAL = "UPDATE_WEIGHT_GOAL";

export const updateDailyGoal = daily_goal => dispatch => {
  dispatch({
    type: UPDATE_DAILY_GOAL,
    payload: daily_goal
  });
};

export const updateSex = sex => dispatch => {
  dispatch({
    type: UPDATE_SEX,
    payload: sex
  });
};

export const updateActivityLevel = activityLevel => dispatch => {
  dispatch({
    type: UPDATE_ACTIVITY_LEVEL,
    payload: activityLevel
  });
};

export const updateBasicInfo = ({
  date_of_birth,
  height,
  weight
}) => dispatch => {
  dispatch({
    type: UPDATE_BASIC_INFO,
    payload: {
      date_of_birth: date_of_birth,
      height: height,
      weight: weight
    }
  });
};

export const updateWeightGoal = ({
  target_weight_kg,
  target_date,
  target_rate
}) => dispatch => {
  dispatch({
    type: UPDATE_WEIGHT_GOAL,
    payload: {
      target_weight_kg: target_weight_kg,
      target_date: target_date,
      target_rate: target_rate
    }
  });
};
