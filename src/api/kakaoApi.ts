import axios from 'axios';

export default async function getKakaoApi(code: string | null) {
  try {
    const res = await axios.get(
      `${'http://localhost:8080/login/oauth2/code/kakao?code='}+${code}`,
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
