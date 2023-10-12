import { baseInstance } from './axiosCustom';

export type SignUpType = {
  id: number;
  nickname: string;
  email: string;
  auth_provider: string;
  image_url: string;
  port_folio_url: string;
  github_url: string;
};

export const signUpApi = async (user: SignUpType, url: string) => {
  const auth_provider = user.auth_provider.toUpperCase();
  const newUser = { ...user, auth_provider: auth_provider, image_url: url };
  const res = await baseInstance.post('users/signup', newUser);
  return res.data;
};
