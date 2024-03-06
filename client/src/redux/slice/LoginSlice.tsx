import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../data/customAxios";

interface Token {
  access: string;
  status: string;
}

const initialState: Token = {
  access: "",
  status: "idle",
};

export const getAuth = createAsyncThunk<
  Token,
  { email: string; password: string },
  { rejectValue: string }
>("auth/getAuth", async (data, { rejectWithValue }) => {
  const response = await api.post("api/login/", data);

  if (response.status !== 200) {
    return rejectWithValue("Login failed");
  }

  return response.data as Token;
});

const userAuth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuth.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAuth.fulfilled, (state, action) => {
      state.access = action.payload.access;
      sessionStorage.setItem("token", JSON.stringify(action.payload.access));
      state.status = "successed";
    });
    builder.addCase(getAuth.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default userAuth.reducer;
