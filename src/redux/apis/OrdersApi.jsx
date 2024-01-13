// apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecommerce-backend-9ec9.vercel.app",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().users?.user?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getOrders: builder.query({
      query: (query) => ({
        method: "GET",
        url: `/api/orders/?status=${query.status}&createdAt[gte]=${query.startDate}&createdAt[lte]=${query.endDate}`,
      }), // Specify the API endpoint URL with a dynamic parameter
    }),

    addOrder: builder.mutation({
      query: (userData) => {
        return {
          url: "api/orders/new", // Replace with your signup endpoint
          method: "POST",
          body: userData,
        };
      },
    }),

    updateOrder: builder.mutation({
      query: (order) => {
        return {
          url: `/api/orders/${order.id}`, // Replace with your signup endpoint
          method: "PUT",
          body: order.body,
        };
      },
    }),

    getMyOrders: builder.query({
      query: (id) => {
        return {
          url: "/api/orders/my/orders",
          method: "GET",
        };
      },
    }),

    deleteOrder: builder.mutation({
      query: (id) => {
        return { url: `/api/orders/${id}`, method: "DELETE" };
      },
    }),
  }),
});

export const {
  useAddOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useGetMyOrdersQuery,
} = ordersApi;
