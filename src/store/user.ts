import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  user: {
    id: number;
    nickname: string;
    image_url: string;
    github_url: string;
    portfolio_url: string;
  };
}

const initialState: UserState = {
  user: {
    id: 0,
    nickname: '',
    image_url: '',
    github_url: '',
    portfolio_url: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
