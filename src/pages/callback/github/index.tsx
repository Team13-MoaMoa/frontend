import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAuthProvider, updateUserId } from '@/store/user';
import { userAuthApi } from '@/api/userAuth';
import Loading from '@/components/Loading';

export default function Github() {
  const router = useRouter();

  let auth: string | null;
  if (typeof window !== 'undefined') {
    const currentPath = router.pathname;

    const pathParts = currentPath.split('/');
    auth = pathParts[2];
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
      }
      if (data.github_user_info) {
        dispatch(updateUserId(data.github_user_info.id));
      }
      dispatch(updateAuthProvider(auth));
      router.push('/');
    })();
  }, [code, dispatch]);

  if (loading) {
    return <Loading />;
  }
}
