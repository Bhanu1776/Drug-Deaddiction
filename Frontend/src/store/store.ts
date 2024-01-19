import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    userSlice
  },
});

//* Exporting Store types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
