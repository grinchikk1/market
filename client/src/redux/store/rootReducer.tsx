import { combineReducers } from "@reduxjs/toolkit";
import customerReducer from "../slice/RegisterSlice";

const rootReducer = combineReducers({
  customer: customerReducer,
});

export default rootReducer;
