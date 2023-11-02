import axios from 'axios';
import { BASE_URL, authInstance } from './axiosCustom';
import { ApiResponseWithDataType } from '@/types/apiResponseType';
import { User } from '@/types/login';

export const userAuthApi = async (auth: string | null, code: string | null) => {
  const res = await axios.get(
    `${BASE_URL}/auth/login/oauth2/code/${auth}?code=${code}`,
  );
  return res.data;
};

export const getUserAPI = async (userId: number) => {
  try {
    const response = await authInstance.get<ApiResponseWithDataType<User>>(
      `/users/${userId}`,
    );
    return response.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
