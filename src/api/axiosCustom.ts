import axios from 'axios';

export const BASE_URL = 'http://43.200.45.247:8080/api/v1';

export const baseInstance = axios.create({
  baseURL: BASE_URL,
});

export const authInstance = axios.create({
  baseURL: BASE_URL,
});

authInstance.interceptors.request.use((config) => {
  if (typeof window === 'object') {
    const accesstoken = localStorage.getItem('access_token');
    config.headers['Authorization'] = `Bearer ${accesstoken}`;
  }

  return config;
});

// TODO: interceptor 재인증 로직 추가
authInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.response.data.message === 'Token expired'
    ) {
      try {
        const newAccessToken = await refreshToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest); // 새로운 access token으로 원래 요청을 재시도
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

async function refreshToken() {
  const response = await baseInstance.post('auth/token', {
    refresh_token: localStorage.getItem('refresh_token'),
  });
  return response.data.access_token;
}
