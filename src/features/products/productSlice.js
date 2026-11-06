import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products"
      );

      if (!response.ok) {
        return rejectWithValue("Unable to fetch product");
      }

      const data = await response.json();
      return data.products;
    } catch (error) {
      return rejectWithValue("Unable to fetch product");
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState(); 
      const { loading } = state.products; 

      if (loading) {
        return false;
      }
      return true;
    },
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    clearProducts: (state) => {
      state.products = [];
    },
  },
});

export const { setProducts, clearProducts } =
  productSlice.actions;

export default productSlice.reducer;