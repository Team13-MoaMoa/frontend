import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Signup() {
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);

  const code = searchParams.get('code');

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `http://localhost:8080/login/oauth2/code/kakao?code=${code}`
      );
      console.log(res);
    })();
  }, [code]);

  return <div>asdasd</div>;
}
