import { combineReducers } from "redux";
import { firebaseAuth } from "./firebaseAuth"; // Example of reducer import
import { foodItemsReducer } from "./foodItemsReducer";
import { firebaseReducer } from "react-redux-firebase";
// import { firestoreReducer } from "redux-firestore";
import { onboardingReducer } from "./onboardingReducer";
import { updateUserInfo } from "./settingsReducer";
import { flywheelReducer } from "./flywheelReducer";

export default combineReducers({
  foodItemsReducer,
  firebase: firebaseReducer,
  // firestore: firestoreReducer,
  onboarding: onboardingReducer,
  auth: firebaseAuth,
  updateUserInfo: updateUserInfo,
  flywheel: flywheelReducer
});
