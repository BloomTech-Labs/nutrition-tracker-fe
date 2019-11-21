const initialState = {
  user_info: {
    firebase_id: "",
    email: "",
    height_cm: "",
    sex: "male",
    dob: "",
    height: {
      feet: "",
      inches: ""
    }
  }
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
        userInfo: action.payload
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
        userInfo: action.payload
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
