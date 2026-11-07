import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
 
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      providesTags: ['Products'],
    }),
    addProduct: builder.mutation({
        query: (newProduct)=>({
            url:"products/add",
            method: "POST",
            body: newProduct,
        }),
        invalidatesTags: ['Products'],
    }),
  }),
});
export const { useGetProductsQuery, useAddProductMutation }=productsApi;