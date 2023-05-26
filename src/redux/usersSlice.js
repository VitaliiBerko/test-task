import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";
import Notiflix from "notiflix";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { userInitState } from "./user.init-state";
import { STATUS } from "../constans/status";
// import { FILTER } from "../constans/filter.constans";

const usersSlice = createSlice({
  name: "users",
  initialState: userInitState,    

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = STATUS.loading
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.status= STATUS.success;
        state.users = payload;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        Notiflix.Notify.failure(payload);
      });
  },

  reducers: {
    setFollowersCountAction (state, {payload}) {

      
      

    },
    setToggleFollowingAction(state, { payload }) {
      // console.log(payload);
      const {userId, isFollowing }= payload;

      state.followingStatus = {
        ...state.followingStatus, 
        [userId]: isFollowing
      }
        console.log(state.followingStatus);    
    },
  },
});

const persistConfig = {
  key: "users",
  storage,
  whitelist: ["items"],
};

export const {setFollowersCountAction, setToggleFollowingAction} = usersSlice.actions;

export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);
