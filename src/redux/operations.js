import { createAsyncThunk } from "@reduxjs/toolkit";

import { publicApi } from "../http/http";


export const fetchUsers = createAsyncThunk(
  "users",
  async (params, thunkApi) => {
      try {
      const response = await publicApi.get("/users", { params });

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
