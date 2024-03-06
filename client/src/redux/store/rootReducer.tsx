import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../slice/LoginSlice";

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
