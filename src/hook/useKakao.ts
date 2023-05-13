import getKakaoApi from '@/api/kakaoApi';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// type Props = {
//   code: string | null;
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
// };

export default function useKakao(
  code: string | null,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  // access 토큰 있으면 main page
  //  access 토큰 없으면 url 같은거 페이지 나오게
  // api요청하고 loading ui
  const [newUser, setNewUser] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await getKakaoApi(code);
      if (!result) {
        setNewUser(false);
      } else {
        const { access_token, refresh_token } = result;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
      }
      setLoading(false);
    })();
  }, [code, setLoading]);

  return [newUser];
}
