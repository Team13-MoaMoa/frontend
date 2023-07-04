import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isLogin: boolean;
  user: {
    id: number;
    nickname: string;
    image_url: string;
    github_url: string;
    portfolio_url: string;
  };
}

const initialState: UserState = {
  isLogin: false,
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
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const { setUser, setIsLogin } = userSlice.actions;
export default userSlice.reducer;
