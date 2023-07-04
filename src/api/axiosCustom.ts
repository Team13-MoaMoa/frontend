import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

export const baseInstance = axios.create({
  baseURL: BASE_URL,
});

export const authInstance = axios.create({
  baseURL: BASE_URL,
  // TODO: 토큰 관리하는 방법에 따라 변경할 수 있음
  headers: { Authorization: `barear ${localStorage.getItem('token')}` },
});

// TODO: interceptor 재인증 로직 추가
