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

export const signUpApi = async (user: SignUpType) => {
  const newUser = { ...user, id: 2788971752, auth_provider: 'KAKAO' };
  const res = await baseInstance.post('api/v1/users/signup', newUser);
  return res.data;
};
