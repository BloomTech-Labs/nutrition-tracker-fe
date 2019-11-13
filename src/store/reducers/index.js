import { combineReducers } from "redux";
import { firebaseAuth } from "./firebaseAuth"; // Example of reducer import
import { firebaseReducer } from "react-redux-firebase";
import { onboardingReducer } from "./onboardingReducer";

export default combineReducers({
  firebaseAuth,
  firebase: firebaseReducer,
  onboardingReducer: onboardingReducer
});
