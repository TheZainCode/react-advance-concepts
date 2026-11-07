import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import { productsApi } from "../features/products/productApi";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(productsApi.middleware),
});