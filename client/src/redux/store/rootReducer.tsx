import { combineReducers } from "@reduxjs/toolkit";
import createCustomerReducer from "../slice/RegisterSlice";

const rootReducer = combineReducers({
  customer: createCustomerReducer,
});

export default rootReducer;
