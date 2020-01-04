import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { dailyLogReducer } from "./dailyLogReducer";
import { firebaseAuth } from "./firebaseAuth";
import { flywheelReducer } from "./flywheelReducer";
import { foodItemsReducer } from "./foodItemsReducer";
// import { firestoreReducer } from "redux-firestore";
import { onboardingReducer } from "./onboardingReducer";
import { progressOverviewReducer } from "./progressOverviewReducer";
import { progressPeriodReducer } from "./progressPeriodReducer";
import { updateUserInfo } from "./settingsReducer";
import { macroProgressReducer } from "./macroProgress";

export default combineReducers({
  foodItemsReducer,
  firebase: firebaseReducer,
  // firestore: firestoreReducer,
  onboarding: onboardingReducer,
  dailyLog: dailyLogReducer,
  auth: firebaseAuth,
  updateUserInfo: updateUserInfo,
  flywheel: flywheelReducer,
  macroProgress: macroProgressReducer,
  progressOverview: progressOverviewReducer,
  progressPeriod: progressPeriodReducer
});
