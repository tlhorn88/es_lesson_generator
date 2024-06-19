import { configureStore } from '@reduxjs/toolkit';
import conceptSequenceReducer from './conceptSequenceSlice';

export const store = configureStore({
  reducer: {
    conceptSequence: conceptSequenceReducer
  }
});
