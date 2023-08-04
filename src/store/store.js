import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth';
import { stockSlice } from './stock';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    stock: stockSlice.reducer,
  },
});