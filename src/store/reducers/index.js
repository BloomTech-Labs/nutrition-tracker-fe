import { combineReducers } from "redux";
import { foodItemsReducer } from "./foodItemsReducer";
import { firebaseReducer } from "react-redux-firebase";
import { onboardingReducer } from "./onboardingReducer";
import { updateUserInfo } from "./settingsReducer";
import { flywheelReducer }  from "./flywheelReducer"; 

export default combineReducers({
  foodItemsReducer,
  firebase: firebaseReducer,
  onboarding: onboardingReducer,
  updateUserInfo: updateUserInfo,
  flywheel: flywheelReducer
});
