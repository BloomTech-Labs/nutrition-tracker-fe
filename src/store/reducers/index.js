import { combineReducers } from "redux";
// import { firebaseAuth } from "./firebaseAuth"; // Example of reducer import
import { firebaseReducer } from "react-redux-firebase";
import { onboardingReducer } from "./onboardingReducer";
import { updateUserSettings } from "./updateUserSettings";
import { dailyLogReducer } from "./dailyLogReducer";
import { flywheelReducer }  from "./flywheelReducer"; 

export default combineReducers({
  // myCustomAuth: firebaseAuth,
  firebase: firebaseReducer,
  onboarding: onboardingReducer,
  updateSettings: updateUserSettings,
  dailyLog: dailyLogReducer,
  flywheel: flywheelReducer
});
