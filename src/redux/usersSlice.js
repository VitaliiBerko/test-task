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
  
  reducers: {
    setFollowersCountAction (state, {payload}) {
      const {userId, followersCount}=payload;
      state.followersCount[userId]= followersCount;
      // console.log(state.followersCount[userId]);   
      

    },
    setToggleFollowingAction(state, { payload }) {
      // console.log(payload);
      const {userId, isFollowing }= payload;

      state.followingStatus = {
        ...state.followingStatus, 
        [userId]: isFollowing
      }
        // console.log(state.followingStatus);    
    },
  },

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

  
});

const persistConfig = {
  key: "users",
  storage,
  whitelist: ['users', 'followingStatus', 'followersCount'],
};

export const {setFollowersCountAction, setToggleFollowingAction} = usersSlice.actions;

export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);
