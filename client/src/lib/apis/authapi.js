import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";
import { clearCurrentUser } from "../redux/userSlice";

let baseUrl = "https://tracking-app-ac71.onrender.com";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
        credentials: "include",
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("refreshToken", data?.refreshToken);
          await dispatch(userApi.endpoints.getCurrentUser.initiate());
        } catch (error) {}
      },
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        credentials: "include",
      }),

      // automatically update user state if get logout user function is successful
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(clearCurrentUser());
          localStorage.removeItem("refreshToken");
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserMutation } = authApi;
