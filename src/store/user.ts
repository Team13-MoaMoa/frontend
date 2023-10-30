import { Auth } from '@/types/login';
import { createSlice } from '@reduxjs/toolkit';

export type UserState = {
  isLogin: boolean;
  user: {
    id: number;
    nickname: string;
    email: string;
    auth_provider: Auth;
    image_url: string;
    github_url: string;
    port_folio_url: string;
  };
};

const initialState: UserState = {
  isLogin: false,
  user: {
    id: 0,
    nickname: '',
    email: '',
    auth_provider: '',
    image_url: '',
    port_folio_url: '',
    github_url: '',
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
    updateAuthProvider(state, action) {
      state.user.auth_provider = action.payload;
    },
    updateUserId(state, action) {
      state.user.id = action.payload;
    },
    updateUserNickname(state, action) {
      state.user.nickname = action.payload;
    },
    updateUserEmail(state, action) {
      state.user.email = action.payload;
    },
    updateUserImageUrl(state, action) {
      state.user.image_url = action.payload;
    },
    updateUserPortFolioUrl(state, action) {
      state.user.port_folio_url = action.payload;
    },
    updateUserGitHubUrl(state, action) {
      state.user.github_url = action.payload;
    },
  },
});

export const {
  setUser,
  setIsLogin,
  updateAuthProvider,
  updateUserId,
  updateUserNickname,
  updateUserImageUrl,
  updateUserPortFolioUrl,
  updateUserGitHubUrl,
} = userSlice.actions;
export default userSlice.reducer;
