const initialState = {
  loggingIn: false,
  isLoggedIn: false,
  loggingOut: false,
  error: ""
};

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
        isLoggedIn: false,
        error: "Login failed"
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
        loggingOut: true
      };

    case "LOGOUT_SUCCESS":
      return {
        ...state,
        loggingOut: false
      };

    case "LOGOUT_FAILURE":
      return {
        ...state,
        loggingOut: false
      };

    // google login reducer
    case "GOOGLE_LOGIN_START":
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    case "GOOGLE_LOGIN_SUCCESS":
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    case "GOOGLE_LOGIN_FAILURE":
      return {
        ...state,
        loggingIn: false
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
