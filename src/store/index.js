import { configureStore } from '@reduxjs/toolkit';
import loadingStateReducer from './loadingStateSlice';

export const store = configureStore({
  reducer: {
    loadingState: loadingStateReducer,
  },
})
