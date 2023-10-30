import { Auth } from '@/types/login';
import { authInstance } from './axiosCustom';

export const logoutApi = async (auth_provider: Auth) => {
  const token = localStorage.getItem('access_token');

  await authInstance.post('/auth/logout', {
    accessToken: typeof window === 'object' && token,
    registrationId: typeof window === 'object' && auth_provider,
  });
  return null;
};
