import { baseInstance } from './axiosCustom';

type SignUpType = {
  id: number;
  nickname: string;
  email: string;
  auth_provider: string;
  image_url: string;
  port_folio_url: string;
  github_url: string;
};

export const signUpApi = async (user: SignUpType) => {
  const res = await baseInstance.post('api/v1/users/signup', user);
  return res.data;
};
