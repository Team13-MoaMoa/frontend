import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserId } from '@/store/user';
import { userAuthApi } from '@/api/userAuth';
import styled from '@emotion/styled';
import loadingUI from '../../assets/loading.gif';
import Image from 'next/image';

export default function Signup() {
  let auth: string | null;
  if (typeof localStorage !== 'undefined') {
    // localStorage를 사용할 수 있는 경우
    auth = localStorage.getItem('auth_provider');
  }
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const code = searchParams.get('code');

  useEffect(() => {
    (async () => {
      let data = await userAuthApi(auth);
      if (data.access_token && data.refresh_token) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
      }
      if (data.kakao_user_info) {
        dispatch(updateUserId(data.kakao_user_info.id));
      } else if (data.github_user_info) {
        dispatch(updateUserId(data.github_user_info.id));
      }
      setLoading(false);
      router.push('/');
    })();
  }, [code, dispatch]);

  if (loading) {
    return (
      <ImageMiddleBox>
        <ImageBox>
          <Image fill src={loadingUI} alt="" />
        </ImageBox>
      </ImageMiddleBox>
    );
  }
}

const ImageBox = styled.div`
  position: relative;
  margin: 0 auto;
  width: 500px;
  height: 500px;
`;

const Empty = styled.div`
  width: 100vw;
  background-color: whitesmoke;
  min-height: calc(100vh - 70px - 159px);
`;

const ImageMiddleBox = styled(Empty)`
  background-color: white;
`;
