import getKakaoApi from '@/api/kakaoApi';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function useKakao(
  code: string | null,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
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
