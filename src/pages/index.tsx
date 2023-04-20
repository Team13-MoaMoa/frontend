import Login from '@/components/login';
import Login2 from '@/components/login/login2';
import Login3 from '@/components/login/login3';
import Login4 from '@/components/login/login4';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const socialRef = useRef<any>(null);
  const nextStep = () => {
    window.scrollBy({
      left: socialRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const disableHorizontalScroll = () => {
    // 현재 스크롤 위치 확인
    const scrollPosition =
      window.pageXOffset || document.documentElement.scrollLeft;

    // 스크롤 위치가 10000px 이하인 경우
    if (scrollPosition <= 10000) {
      // 스크롤 이벤트 기본 동작 막기
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowX = 'auto';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', disableHorizontalScroll);
    return () => {
      window.removeEventListener('scroll', disableHorizontalScroll);
    };
  }, []);
  return (
    <Div>
      <OverLaySocialLogin ref={socialRef}>
        <Login nextStep={nextStep} />
        <Login2 nextStep={nextStep} />
        <Login3 nextStep={nextStep} />
        <Login4 nextStep={nextStep} />
      </OverLaySocialLogin>
    </Div>
  );
}

const Div = styled.div`
  font-family: var(--Noto-B);
  color: ${(props) => props.theme.main_brown};
`;

const OverLaySocialLogin = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;
