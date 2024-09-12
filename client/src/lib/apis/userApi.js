import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCurrentUser } from "../redux/userSlice";

let baseUrl = "https://tracking-app-ac71.onrender.com";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    createNewUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/create-user",
        method: "POST",
        body: userData,
      }),
    }),

    verifyUserAccount: builder.mutation({
      query: (verificationToken) => ({
        url: "/auth/verify",
        method: "PUT",
        body: verificationToken,
      }),
    }),

    getCurrentUser: builder.mutation({
      query: () => ({
        url: "/auth/me",
        method: "GET",
        credentials: "include",
      }),
      // automatically update user state if get current user function is successful
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setCurrentUser(data?.user));
        } catch (error) {
          // implement a function to send request to new access token endpoint
          // if we get back expired token or error 403 status code
        }
      },
    }),
  }),
});

export const {
  useCreateNewUserMutation,
  useVerifyUserAccountMutation,
  useGetCurrentUserMutation,
} = userApi;
