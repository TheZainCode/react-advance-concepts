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
      transformResponse: (response) => response.products,
      providesTags: ['Products'],
    }),
    getProductById: builder.query({
        query: (id)=> `products/${id}`,
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
export const { useGetProductsQuery, useAddProductMutation, useGetProductByIdQuery }=productsApi;