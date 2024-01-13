// apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    // mode: "no-cors",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().users?.user?.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/api/products",
      }), // Specify the API endpoint URL with a dynamic parameter
    }),

    getFeaturedproducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/api/products/featured",
      }),
    }),

    getSimilarProducts: builder.query({
      query: (cat) => ({
        method: "GET",
        url: `/api/products/similar/${cat}`,
      }),
    }),

    addProduct: builder.mutation({
      query: (userData) => {
        return {
          url: "api/products/new", // Replace with your signup endpoint
          method: "POST",
          body: userData,
        };
      },
    }),

    editProduct: builder.mutation({
      query: (userData) => {
        return {
          url: `api/products/update/${userData.id}`, // Replace with your signup endpoint
          method: "PUT",
          body: userData.formData,
        };
      },
    }),

    deleteProduct: builder.mutation({
      query: (id) => {
        return { url: `/api/products/delete/${id}`, method: "DELETE" };
      },
    }),

    searchproduct: builder.query({
      query: (query) => {
        return {
          url: `/api/products/?keyword=${query.keyword}&price[gte]=${query.minValue}&price[lte]=${query.maxValue}&category=${query.category}&stock=${query.stock}`,
          method: "GET",
        };
      },
    }),

    addReview: builder.mutation({
      query: (data) => {
        return {
          url: `/api/products/review/${data.id}`,
          method: "POST",
          body: data.body,
        };
      },
    }),

    deleteImage: builder.mutation({
      query: (data) => {
        const headers = new Headers();
        headers.append("Content-Type", "multipart/form-data");
        return {
          url: `/products/admin/Image/delete`, // Replace with your signup endpoint
          method: "PUT",
          body: data,
          headers,
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useAddImageMutation,
  useDeleteImageMutation,
  useEditProductMutation,
  useDeleteProductMutation,
  useGetFeaturedproductsQuery,
  useGetSimilarProductsQuery,
  useSearchQuery,
  useSearchproductQuery,
  useAddReviewMutation,
} = productsApi;
