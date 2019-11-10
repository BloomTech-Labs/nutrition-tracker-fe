export const UPDATE_SEX = "UPDATE_SEX",
  UPDATE_ACTIVITY_LEVEL = "UPDATE_ACTIVITY_LEVEL",
  UPDATE_BASIC_INFO = "UPDATE_BASIC_INFO",
  UPDATE_WEIGHT_GOAL = "UPDATE_WEIGHT_GOAL";

export const updateSex = sex => ({
  type: UPDATE_SEX,
  sex
});

export const updateActivityLevel = activityLevel => ({
  type: UPDATE_SEX,
  activityLevel
});

export const updateBasicInfo = ({ date_of_birth, height, weight }) => ({
  type: UPDATE_SEX,
  date_of_birth,
  height,
  weight
});

export const updateWeightGoal = ({
  target_weight,
  target_date,
  target_rate
}) => ({
  type: UPDATE_SEX,
  target_weight,
  target_date,
  target_rate
});
