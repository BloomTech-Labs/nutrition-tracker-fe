const initialState = {
  "id": "",
  "firebase_id": "",
  "email": "",
  "height_cm": "",
  "sex": "",
  "dob": ""
};

export const updateUserInfo = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INFO_START": {
      return {
        ...state
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
        dob: action.payload.dob
        // height: {
        //   feet: action.payload.height.feet,
        //   inches: action.payload.height.inches
        // }
      };
    }
    case "UPDATE_INFO_FAILURE": {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};

export const getUserInfo = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INFO_START": {
      return {
        ...state
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
        dob: action.payload.dob
        // height: {
        //   feet: action.payload.height.feet,
        //   inches: action.payload.height.inches
        // }
      };
    }
    case "GET_INFO_FAILURE": {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};