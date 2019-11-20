import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer"; // Example of reducer import
import flywheelReducer from './flywheelReducer'; 
export default combineReducers({
  loginReducer, // Example of reducer
  flywheelReducer
});
