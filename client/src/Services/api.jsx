import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/", // your backend base URL
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: "auth/register",
        method: "POST",
        body: userData,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    getProfile: builder.query({
      query: (userId) => `profile/${userId}`,
    }),

    createOrUpdateProfile: builder.mutation({
      query: (profileData) => ({
        url: "profile/me",
        method: "PUT",
        body: profileData,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useGetProfileQuery, useCreateOrUpdateProfileMutation } = api;
