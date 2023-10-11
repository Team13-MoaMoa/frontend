import axios from 'axios';
import { baseInstance } from './axiosCustom';

export const userAuthApi = async (auth: string | null, code: string | null) => {
  const res = await baseInstance.get(`login/oauth2/code/${auth}?code=${code}`);
  return res.data;
};
