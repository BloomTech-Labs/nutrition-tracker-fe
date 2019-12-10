import { combineReducers } from "redux";
import { firebaseAuth } from "./firebaseAuth";
import { foodItemsReducer } from "./foodItemsReducer";
import { firebaseReducer } from "react-redux-firebase";
import { onboardingReducer } from "./onboardingReducer";
import { dailyLogReducer } from "./dailyLogReducer";
import { updateUserInfo } from "./settingsReducer";
import { flywheelReducer } from "./flywheelReducer";

export default combineReducers({
  foodItemsReducer,
  firebase: firebaseReducer,
  onboarding: onboardingReducer,
  dailyLog: dailyLogReducer,
  auth: firebaseAuth,
  updateUserInfo: updateUserInfo,
  flywheel: flywheelReducer
});
