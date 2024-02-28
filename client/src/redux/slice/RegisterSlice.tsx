import { createSlice } from "@reduxjs/toolkit";
import { createCustomer } from "../../data/fetchRegister";

const initialState = {
  customer: null,
  isAuth: false,
  status: "idle",
  error: null,
};

export const registerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.customer = action.payload.customer;
        localStorage.setItem("customer", JSON.stringify(state.customer));
        state.status = "succeeded";
      })
      .addCase(createCustomer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCustomer.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export { createCustomer };
export default registerSlice.reducer;
