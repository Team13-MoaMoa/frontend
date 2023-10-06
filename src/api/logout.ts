import { authInstance, baseInstance } from './axiosCustom';

export const logoutApi = async () => {
  await authInstance.post('logout', {
    accessToken:
      typeof window === 'object'
        ? `${localStorage.getItem('access_token')}`
        : '',
    registrationId:
      typeof window === 'object' ? localStorage.getItem('auth_provider') : '',
  });
  return null;
};
