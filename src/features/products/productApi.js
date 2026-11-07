import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    addProduct: builder.mutation({
        query: (newProduct)=>({
            url:"products/add",
            method: "POST",
            body: newProduct,
        }),
    }),
  }),
});
export const { useGetProductsQuery, useAddProductMutation }=productsApi;