import { authInstance } from './axiosCustom';

export const logoutApi = async (auth_provider: string) => {
  const token = localStorage.getItem('access_token');

  await authInstance.post('logout', {
    accessToken: typeof window === 'object' ? token : '',
    registrationId: typeof window === 'object' ? auth_provider : '',
  });
  return null;
};
