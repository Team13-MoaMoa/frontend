import { API } from '@/services/config';
import axios from 'axios';

export default async function getKakaoApi(code: string | null) {
  try {
    const res = await axios.get(`${API.kakao}+${code}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
