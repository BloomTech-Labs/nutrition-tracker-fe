const initialState = {
  id: "",
  firebase_id: "",
  email: "",
  height_cm: "",
  sex: "",
  dob: "",
  weight_kg: "",
  height: {
    feet: "",
    inches: ""
  },
  weight_lbs: "",
  activity_level: "",
  fat_ratio: "",
  protein_ratio: "",
  carb_ratio: "",
  weekly_goal_rate: "",
  weight_goal_kg: "",
  updateStart: false,
  updateSuccess: false,
  updateFailure: false,
  getInfoStart: false,
  getInfoSuccess: false,
  getInfoFailure: false,
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
        getInfoStart: true,
        getInfoSuccess: false,
        getInfoFailure: false
      };
    }
    case "GET_CURRENT_WEIGHT_SUCCESS": {
      return {
        ...state,
        weight_kg: action.payload.weight_kg,
        weight_lbs: action.payload.weight_lbs,
        getInfoStart: false,
        getInfoSuccess: true,
        getInfoFailure: false
      };
    }
    case "GET_CURRENT_WEIGHT_FAILURE": {
      return {
        ...state,
        getInfoStart: false,
        getInfoSuccess: false,
        getInfoFailure: true
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
        getInfoStart: true,
        getInfoSuccess: false,
        getInfoFailure: false
      };
    }
    case "GET_ACTIVITY_LEVEL_SUCCESS": {
      return {
        ...state,
        activity_level: action.payload.activity_level,
        getInfoStart: false,
        getInfoSuccess: true,
        getInfoFailure: false
      };
    }
    case "GET_ACTIVITY_LEVEL_FAILURE": {
      return {
        ...state,
        getInfoStart: false,
        getInfoSuccess: false,
        getInfoFailure: true
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
        getInfoStart: true,
        getInfoSuccess: false,
        getInfoFailure: false
      };
    }
    case "GET_MACROS_SUCCESS": {
      return {
        ...state,
        fat_ratio: action.payload.fat_ratio,
        protein_ratio: action.payload.protein_ratio,
        carb_ratio: action.payload.carb_ratio,
        getInfoStart: false,
        getInfoSuccess: true,
        getInfoFailure: false
      };
    }
    case "GET_MACROS_FAILURE": {
      return {
        ...state,
        getInfoStart: false,
        getInfoSuccess: false,
        getInfoFailure: true
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
        getInfoStart: true,
        getInfoSuccess: false,
        getInfoFailure: false
      };
    }
    case "GET_WEIGHT_GOAL_SUCCESS": {
      return {
        ...state,
        weekly_goal_rate: action.payload.weekly_goal_rate,
        weight_goal_kg: action.payload.weight_goal_kg,
        getInfoStart: false,
        getInfoSuccess: true,
        getInfoFailure: false
      };
    }
    case "GET_WEIGHT_GOAL_FAILURE": {
      return {
        ...state,
        getInfoStart: false,
        getInfoSuccess: false,
        getInfoFailure: true
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
