import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../lib/apis/userApi";
import { authApi } from "../lib/apis/authapi";
import { riderApi } from "../lib/apis/riderApi";
import userSlice from "../lib/redux/userSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [riderApi.reducerPath]: riderApi.reducer,
    userState: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      riderApi.middleware
    ),
});

setupListeners(store.dispatch);
