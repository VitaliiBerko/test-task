import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";
import Notiflix from "notiflix";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        Notiflix.Notify.failure(payload);
      });
  },

  reducers: {
    toggleFollowingAction(state, { payload }) {
      for (const user of state.items) {
        if (user.id === payload) {
          user.isFolowing = !user.isFolowing;
          break;
        }
      }
    },
  },
});

const persistConfig = {
  key: "users",
  storage,
  whitelist: ["items"],
};

// const {toggleFollowingAction} = usersSlice.actions;

export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);
