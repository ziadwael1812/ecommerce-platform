import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from '../services/productService';

const initialState = {
  products: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await productService.getProducts();
  return response.data;
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched products to the array
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

export default productSlice.reducer;
