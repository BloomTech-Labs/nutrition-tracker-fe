const initialState = {
  id: "",
  firebase_id: "",
  email: "",
  height_cm: "",
  sex: "",
  dob: "",
  actual_weight_kg: "",
  height: {
    feet: "",
    inches: ""
  },
  actual_weight_lbs: "",
  activity_level: "",
  fat_ratio: "",
  protein_ratio: "",
  carb_ratio: "",
  goal_weekly_weight_change_rate: "",
  goal_weight_kg: "",
  goal_weight_lbs: "",
  updateStart: false,
  updateSuccess: false,
  updateFailure: false,
  // ***********************
  getInfoStart: false,
  getInfoSuccess: false,
  getInfoFailure: false,
  getCurrentWeightStart: false,
  getCurrentWeightSuccess: false, 
  getCurrentWeightFailure: false,
  getActivityLevelStart: false,
  getActivityLevelSuccess: false,
  getActivityLevelFailure: false,
  getMacrosStart: false,
  getMacrosSuccess: false,
  getMacrosFailure: false,
  getWeightGoalStart: false,
  getWeightGoalSuccess: false,
  getWeightGoalFailure: false,
  error: null
};

export const updateUserInfo = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INFO_START": {
      return {
        ...state,
        getInfoStart: true,
        getInfoSuccess: false,
        getInfoFailure: false
      };
    }
    /********************************************************
     *                    User Cases                        *
     ********************************************************/
    case "GET_INFO_SUCCESS": {
      return {
        ...state,
        id: action.payload.id,
        firebase_id: action.payload.firebase_id,
        email: action.payload.email,
        height_cm: action.payload.height_cm,
        sex: action.payload.sex,
        dob: action.payload.dob,
        height: {
          feet: action.payload.height.feet,
          inches: action.payload.height.inches
        },
        getInfoStart: false,
        getInfoSuccess: true,
        getInfoFailure: false
      };
    }
    case "GET_INFO_FAILURE": {
      return {
        ...state,
        getInfoStart: false,
        getInfoSuccess: false,
        getInfoFailure: true
      };
    }
    case "UPDATE_INFO_START": {
      return {
        ...state,
        updateStart: true,
        updateSuccess: false,
        updateFailure: false
      };
    }
    case "UPDATE_INFO_SUCCESS": {
      return {
        ...state,
        id: action.payload.id,
        firebase_id: action.payload.firebase_id,
        email: action.payload.email,
        height_cm: action.payload.height_cm,
        // height: {
        //   feet: action.payload.height.feet,
        //   inches: action.payload.height.inches
        // },
        sex: action.payload.sex,
        dob: action.payload.dob,
        updateStart: false,
        updateSuccess: true,
        updateFailure: false
      };
    }
    case "UPDATE_INFO_FAILURE": {
      return {
        ...state,
        updateStart: false,
        updateSuccess: false,
        updateFailure: true,
        errorMessage: action.payload
      };
    }
    /********************************************************
     *                Current Weight Cases                  *
     ********************************************************/

    case "GET_CURRENT_WEIGHT_START": {
      return {
        ...state,
        getCurrentWeightStart: true,
        getCurrentWeightSuccess: false, 
        getCurrentWeightFailure: false,
      };
    }
    case "GET_CURRENT_WEIGHT_SUCCESS": {
      return {
        ...state,
        actual_weight_kg: action.payload.actual_weight_kg,
        actual_weight_lbs: action.payload.actual_weight_lbs,
        getCurrentWeightStart: false,
        getCurrentWeightSuccess: true, 
        getCurrentWeightFailure: false,
      };
    }
    case "GET_CURRENT_WEIGHT_FAILURE": {
      return {
        ...state,
        getCurrentWeightStart: false,
        getCurrentWeightSuccess: false, 
        getCurrentWeightFailure: true,
      };
    }
    case "ADD_CURRENT_WEIGHT_START": {
      return {
        ...state,
        updateStart: true,
        updateSuccess: false,
        updateFailure: false
      };
    }
    case "ADD_CURRENT_WEIGHT_SUCCESS": {
      return {
        ...state,
        weight_kg: action.payload.weight_kg,
        updateStart: false,
        updateSuccess: true,
        updateFailure: false
      };
    }
    case "ADD_CURRENT_WEIGHT_FAILURE": {
      return {
        ...state,
        updateStart: false,
        updateSuccess: false,
        updateFailure: true,
        errorMessage: action.payload
      };
    }
    /********************************************************
     *                Activity Level Cases                  *
     ********************************************************/

    case "GET_ACTIVITY_LEVEL_START": {
      return {
        ...state,
        getActivityLevelStart: true,
        getActivityLevelSuccess: false,
        getActivityLevelFailure: false,
      };
    }
    case "GET_ACTIVITY_LEVEL_SUCCESS": {
      return {
        ...state,
        activity_level: action.payload.activity_level,
        getActivityLevelStart: false,
        getActivityLevelSuccess: true,
        getActivityLevelFailure: false,
      };
    }
    case "GET_ACTIVITY_LEVEL_FAILURE": {
      return {
        ...state,
        getActivityLevelStart: false,
        getActivityLevelSuccess: false,
        getActivityLevelFailure: true,
      };
    }
    case "ADD_ACTIVITY_LEVEL_START": {
      return {
        ...state,
        updateStart: true,
        updateSuccess: false,
        updateFailure: false
      };
    }
    case "ADD_ACTIVITY_LEVEL_SUCCESS": {
      return {
        ...state,
        activity_level: action.payload.activity_level,
        updateStart: false,
        updateSuccess: true,
        updateFailure: false
      };
    }
    case "ADD_ACTIVITY_LEVEL_FAILURE": {
      return {
        ...state,
        updateStart: false,
        updateSuccess: false,
        updateFailure: true,
        errorMessage: action.payload
      };
    }

    /********************************************************
     *                    Macro Cases                       *
     ********************************************************/

    case "GET_MACROS_START": {
      return {
        ...state,
        getMacrosStart: true,
        getMacrosSuccess: false,
        getMacrosFailure: false,
      };
    }
    case "GET_MACROS_SUCCESS": {
      return {
        ...state,
        fat_ratio: action.payload.fat_ratio,
        protein_ratio: action.payload.protein_ratio,
        carb_ratio: action.payload.carb_ratio,
        getMacrosStart: false,
        getMacrosSuccess: true,
        getMacrosFailure: false,
      };
    }
    case "GET_MACROS_FAILURE": {
      return {
        ...state,
        getMacrosStart: false,
        getMacrosSuccess: false,
        getMacrosFailure: true,
      };
    }
    case "ADD_MACROS_START": {
      return {
        ...state,
        updateStart: true,
        updateSuccess: false,
        updateFailure: false
      };
    }
    case "ADD_MACROS_SUCCESS": {
      return {
        ...state,
        fat_ratio: action.payload.activity_level,
        protein_ratio: action.payload.protein_ratio,
        carb_ratio: action.payload.carb_ratio,
        updateStart: false,
        updateSuccess: true,
        updateFailure: false
      };
    }
    case "ADD_MACROS_FAILURE": {
      return {
        ...state,
        updateStart: false,
        updateSuccess: false,
        updateFailure: true,
        errorMessage: action.payload
      };
    }

    /********************************************************
     *                Weight Goal Cases                     *
     ********************************************************/

    case "GET_WEIGHT_GOAL_START": {
      return {
        ...state,
        getWeightGoalStart: true,
        getWeightGoalSuccess: false,
        getWeightGoalFailure: false,
      };
    }
    case "GET_WEIGHT_GOAL_SUCCESS": {
      return {
        ...state,
        goal_weekly_weight_change_rate: action.payload.goal_weekly_weight_change_rate,
        goal_weight_kg: action.payload.goal_weight_kg,
        goal_weight_lbs: action.payload.goal_weight_lbs,
        getWeightGoalStart: false,
        getWeightGoalSuccess: true,
        getWeightGoalFailure: false,
      };
    }
    case "GET_WEIGHT_GOAL_FAILURE": {
      return {
        ...state,
        getWeightGoalStart: false,
        getWeightGoalSuccess: false,
        getWeightGoalFailure: true,
      };
    }
    case "ADD_WEIGHT_GOAL_START": {
      return {
        ...state,
        updateStart: true,
        updateSuccess: false,
        updateFailure: false
      };
    }
    case "ADD_WEIGHT_GOAL_SUCCESS": {
      return {
        ...state,
        weekly_goal_rate: action.payload.weekly_goal_rate,
        weight_goal_kg: action.payload.weight_goal_kg,
        updateStart: false,
        updateSuccess: true,
        updateFailure: false
      };
    }
    case "ADD_WEIGHT_GOAL_FAILURE": {
      return {
        ...state,
        updateStart: false,
        updateSuccess: false,
        updateFailure: true,
        errorMessage: action.payload
      };
    }
    default:
      return state;
  }
};
