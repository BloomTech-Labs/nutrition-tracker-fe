import { combineReducers } from "redux";
import { foodItemsReducer } from "./foodItemsReducer";
import { firebaseReducer } from "react-redux-firebase";
import { onboardingReducer } from "./onboardingReducer";
import { updateUserSettings } from "./updateUserSettings";
import { flywheelReducer }  from "./flywheelReducer";

export default combineReducers({
  foodItemsReducer,
  firebase: firebaseReducer,
  onboarding: onboardingReducer,
  updateSettings: updateUserSettings,
  flywheel: flywheelReducer
});
