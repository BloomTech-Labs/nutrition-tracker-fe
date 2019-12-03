const initialState = {
  height: "",
  weight: ""
};

export const updateUserSettings = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SETTINGS_START": {
      return {
        ...state
      };
    }

    case "UPDATE_SETTINGS_SUCCESS": {
      const { height, weight } = action.payload;
      return {
        ...state,
        height: height,
        weight: weight
      };
    }

    case "UPDATE_SETTINGS_FAILURE": {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};
