// userApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userapi = createApi({
  reducerPath: "userapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().users?.user?.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    
    addUser: builder.mutation({
      query: (userData) => {
        return {
          url: "/api/users/new", // Replace with your signup endpoint
          method: "POST",
          body: userData,
        };
      },
    }),

    LoginUser: builder.mutation({
      query: (userData) => ({
        url: "api/users/Login", // Replace with your signup endpoint
        method: "POST",
        body: userData,
      }),
    }),

    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: "api/users/update",
          method: "POST",
          body: data,
        };
      },
    }),

    UpdatePassword: builder.mutation({
      query: (userData) => {
        return {
          url: "api/users/update/password", // Replace with your signup endpoint
          method: "POST",
          body: userData,
        };
      },
    }),

    forgotPassword: builder.mutation({
      query: (userData) => ({
        url: "api/users/forgotPassword", // Replace with your signup endpoint
        method: "POST",
        body: userData,
      }),
    }),

    ResetPassword: builder.mutation({
      query: (userData) => ({
        url: "api/users/password/reset", // Replace with your signup endpoint
        method: "POST",
        body: userData,
      }),
    }),

    ResendOtp: builder.mutation({
      query: (id) => ({
        url: "/users/resendOtp", // Replace with your signup endpoint
        method: "POST",
        body: id,
      }),
    }),

    verify: builder.mutation({
      query: (otp) => {
        return {
          url: "/api/users/verify",
          method: "POST",
          body: otp,
        };
      },
    }),

    resendVerificationOtp: builder.mutation({
      query: (name) => {
        return {
          url: `/api/users/resendOtp`,
          method: "POST",
          body: name,
        };
      },
    }),
  }),
});

export const {
  useAddUserMutation,
  useLoginUserMutation,
  useUpdateUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useResendOtpMutation,
  useUpdatePasswordMutation,
  useVerifyMutation,
  useResendVerificationOtpMutation,
} = userapi;
