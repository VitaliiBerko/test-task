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
} from "redux-persist";
import { userInitState } from "./user.init-state";

const initState = {
  users: userInitState,
};

export const store = configureStore({
  preloadedState: initState,
  reducer: {
    users: usersReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
