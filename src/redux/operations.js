import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL= "https://63e61ee87eef5b22337f4289.mockapi.io";

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    
)
