import { combineReducers } from "redux";
// import { firebaseAuth } from "./firebaseAuth"; // Example of reducer import
import { firebaseReducer } from "react-redux-firebase";
import { onboardingReducer } from "./onboardingReducer";
import { updateUserInfo } from "./updateUserSettings";

export default combineReducers({
  // myCustomAuth: firebaseAuth,
  firebase: firebaseReducer,
  onboarding: onboardingReducer,
  updateUserInfo: updateUserInfo
});
