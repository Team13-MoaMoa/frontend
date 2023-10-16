import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user';
import { codeSlice } from './code';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    code: codeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
