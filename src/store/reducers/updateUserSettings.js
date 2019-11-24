const initialState = {
  id: "",
  firebase_id: "",
  email: "",
  height_cm: "",
  sex: "",
  dob: "",
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
        getInfoFailure: false,
      };
    }
    case "GET_INFO_SUCCESS": {
      return {
        ...state,
        id: action.payload.id,
        firebase_id: action.payload.firebase_id,
        email: action.payload.email,
        height_cm: action.payload.height_cm,
        sex: action.payload.sex,
        dob: action.payload.dob,
        getInfoStart: false,
        getInfoSuccess: true,
        getInfoFailure: false,
        // height: {
        //   feet: action.payload.height.feet,
        //   inches: action.payload.height.inches
        // }
      };
    }
    case "GET_INFO_FAILURE": {
      return {
        ...state,
        getInfoStart: false,
        getInfoSuccess: false,
        getInfoFailure: true,
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
        sex: action.payload.sex,
        dob: action.payload.dob,
        updateStart: false,
        updateSuccess: true,
        updateFailure: false
        // height: {
        //   feet: action.payload.height.feet,
        //   inches: action.payload.height.inches
        // }
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

    default:
      return state;
  }
};

// export const getUserInfo = (state = initialState, action) => {
//   switch (action.type) {
    
// };