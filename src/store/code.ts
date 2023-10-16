import { createSlice } from '@reduxjs/toolkit';

export type codeState = {
  code: string;
};

const initialState: codeState = {
  code: '',
};

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    updateCode(state, action) {
      state.code = action.payload;
    },
  },
});

export const { updateCode } = codeSlice.actions;
export default codeSlice.reducer;
