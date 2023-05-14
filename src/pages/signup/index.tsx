import Login2 from '@/components/login/login2';
import Login3 from '@/components/login/login3';
import Login4 from '@/components/login/login4';
import useKakao from '@/hook/useKakao';
import styled from '@emotion/styled';
import loadingUI from '@/assets/loading.gif';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Image from 'next/image';
import { User } from '@/types/login';
export default function Signup() {
  const [user, setUser] = useState<User>({
    id: 0,
    nickname: '',
    image_url: '',
    github_url: '',
    portfolio_url: '',
  });
  const [step, setStep] = useState(1);
  const router = useRouter();
  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const code = searchParams.get('code');
  const [loading, setLoading] = useState(true);
  const [hasUser] = useKakao(code, setLoading);

  if (loading) {
    return (
      <div>
        <ImageBox>
          <Image fill src={loadingUI} alt="" />
        </ImageBox>
      </div>
    );
  }

  // if (hasUser) {
  //   router.push('/');
  // }

  switch (step) {
    case 1:
      return (
        <>
          <Empty></Empty>
          <Login2 setUser={setUser} setStep={setStep} />
        </>
      );

    case 2:
      return (
        <>
          <Empty></Empty>
          <Login3 setUser={setUser} setStep={setStep} />
        </>
      );
    case 3:
      return (
        <>
          <Empty></Empty>
          <Login4 />
        </>
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
