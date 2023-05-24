import { createAsyncThunk } from "@reduxjs/toolkit";

import { publicApi } from "../http/http";
import { LIMIT_PER_PAGE } from "../constans/operation.constans";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (page = 1, thunkApi) => {
    const params = { page, limit: LIMIT_PER_PAGE };
    try {
      const response = await publicApi.get("/users", { params });

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
