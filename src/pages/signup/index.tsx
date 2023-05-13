import useKakao from '@/hook/useKakao';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function Signup() {
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const code = searchParams.get('code');
  const [loading, setLoading] = useState(true);
  const [user] = useKakao(code, setLoading);
  if (loading) {
    return <div>로딩중입니다...</div>;
  }

  if (user) {
    router.push('/');
  }
  return <div>하이</div>;
}

// access 토큰 있으면 main page
//  access 토큰 없으면 url 같은거 페이지 나오게
// api요청하고 loading ui
