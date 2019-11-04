import { combineReducers } from "redux";
import { firebaseAuth } from "./firebaseAuth"; // Example of reducer import
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  firebaseAuth,
  firebase: firebaseReducer
});
