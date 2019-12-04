import { combineReducers } from "redux";
import { firebaseAuth } from "./firebaseAuth"; // Example of reducer import
import { firebaseReducer } from "react-redux-firebase";
// import { firestoreReducer } from "redux-firestore";
import { onboardingReducer } from "./onboardingReducer";
import { updateUserSettings } from "./updateUserSettings";

export default combineReducers({
  firebase: firebaseReducer,
  // firestore: firestoreReducer,
  onboarding: onboardingReducer,
  updateSettings: updateUserSettings,
  auth: firebaseAuth
});
