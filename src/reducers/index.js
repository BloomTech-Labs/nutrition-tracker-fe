import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer"; // Example of reducer import
import { foodItemsReducer } from "./foodItemsReducer";

export default combineReducers({
  loginReducer, // Example of reducer
  foodItemsReducer
});
