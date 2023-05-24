import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';


export const store = configureStore({
    reducer: {
        users: usersReducer,
        // filter: filterReducer,
    },
    devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),


})

export const persistor = persistStore(store)