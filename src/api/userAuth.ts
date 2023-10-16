import axios from 'axios';

export const userAuthApi = async (auth: string | null, code: string | null) => {
  const BASE_URL = 'http://43.200.45.247:8080/';
  const res = await axios.get(
    `${BASE_URL}api/v1/auth/login/oauth2/code/${auth}?code=${code}`,
  );
  return res.data;
};
