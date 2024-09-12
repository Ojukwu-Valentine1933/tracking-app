import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let baseUrl = process.env.REACT_APP_API_DEV_BASE_URL;

export const riderApi = createApi({
  reducerPath: "riderApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    getAllRiders: builder.mutation({
      query: () => ({
        url: "/riders",
        method: "GET",
        credentials: "include",
      }),
    }),

    getAllRidersOnTransit: builder.mutation({
      query: () => ({
        url: "/riders/transit",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetAllRidersMutation, useGetAllRidersOnTransitMutation } =
  riderApi;
