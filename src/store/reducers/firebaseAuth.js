import initialState from "./initialState";

export const firebaseAuth = (state = initialState, action) => {
  switch (action.type) {
    // login reducer
    case "LOGIN_START":
      return {
        ...state,
        loggingIn: true,
        isLoggedIn: false,
        error: null
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        error: null
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: false
      };

    // register reducer
    case "REGISTER_START":
      return {
        ...state,
        loggingIn: true,
        isLoggedIn: false,
        error: ""
      };

    case "REGISTER_SUCCESS":
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        error: ""
      };

    case "REGISTER_FAILURE":
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload
      };

    // logout reducer
    case "LOGOUT_START":
      return {
        ...state,
        loggedOut: false
      };

    case "LOGOUT_SUCCESS":
      return {
        ...state,
        loggedOut: true,
        token: null
      };

    case "LOGOUT_FAILURE":
      return {
        ...state,
        loggedOut: false
      };

    // google login reducer
    case "GOOGLE_LOGIN_START":
      return {
        ...state,
        loggingIn: true,
        isLoggedIn: false,
        error: null
      };
    case "GOOGLE_LOGIN_SUCCESS":
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        token: action.payload,
        error: null
      };
    case "GOOGLE_LOGIN_FAILURE":
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: false
      };

    // facebook login reducer
    case "FACEBOOK_LOGIN_START":
      return {
        ...state,
        loggingIn: true,
        isLoggedIn: false,
        error: null
      };
    case "FACEBOOK_LOGIN_SUCCESS":
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        error: null
      };
    case "FACEBOOK_LOGIN_FAILURE":
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: false
      };

    // return default state in case the case doesn't match any of our cases
    default:
      return state;
  }
};
