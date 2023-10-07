import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAuthProvider, updateUserId } from '@/store/user';
import { userAuthApi } from '@/api/userAuth';
import Loading from '@/components/Loading';
import { createAuthInstance } from '@/api/axiosCustom';

export default function Kakao() {
  const router = useRouter();
  let auth: string | null;
  if (typeof window !== 'undefined') {
    // 현재 경로를 가져옵니다
    const currentPath = router.pathname;

    // 경로를 분석하고 필요한 부분을 추출합니다
    const pathParts = currentPath.split('/'); // 경로를 슬래시로 분할
    auth = pathParts[2]; // "kakao" 부분을 가져옵니다
  }

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const code = searchParams.get('code');

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await userAuthApi(auth, code);
      if (data.access_token && data.refresh_token) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        const token = localStorage.getItem('access_token');
        createAuthInstance(token);
      }
      if (data.kakao_user_info) {
        dispatch(updateUserId(data.kakao_user_info.id));
      } else if (data.github_user_info) {
        dispatch(updateUserId(data.github_user_info.id));
      }
      console.log('호출');
      dispatch(updateAuthProvider(auth));
      setLoading(false);
      router.push('/');
    })();
  }, [code, dispatch]);

  if (loading) {
    return <Loading />;
  }
}
