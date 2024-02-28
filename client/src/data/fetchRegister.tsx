import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseApiUrl = "/api";

// Створити замовлення
export const createCustomer = createAsyncThunk(
  "customer/createCustomer",
  async (newCustomer) => {
    const response = await axios.post(`${baseApiUrl}/customer`, newCustomer);
    return response.data;
  },
);
