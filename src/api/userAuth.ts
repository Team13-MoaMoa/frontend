import axios from 'axios';
import { baseInstance } from './axiosCustom';

export const userAuthApi = async (code: string | null) => {
  let res = await baseInstance.get(`login/oauth2/code/kakao?code=${code}`);
  return res.data;
};
