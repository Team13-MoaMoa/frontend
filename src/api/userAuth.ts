import axios from 'axios';
import { BASE_URL } from './axiosCustom';

export const userAuthApi = async (auth: string | null, code: string | null) => {
  const res = await axios.get(
    `${BASE_URL}/auth/login/oauth2/code/${auth}?code=${code}`,
  );
  return res.data;
};
