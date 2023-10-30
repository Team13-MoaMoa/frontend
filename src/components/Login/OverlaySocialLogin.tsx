import styled from '@emotion/styled';
import React from 'react';
import Login from '@/components/Login';

type OverlaySocialLoginProps = {
  setIsLoginModalClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function OverlaySocialLogin({
  setIsLoginModalClicked,
}: OverlaySocialLoginProps) {
  const closeModalHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const OverlayClassName = 'css-j8i9ny';
    const clickClassName = e.target as HTMLDivElement;
    if (clickClassName.className === OverlayClassName) {
      setIsLoginModalClicked(false);
    }
  };

  return (
    <OverLaySocialLogin id="overlay" onClick={closeModalHandler}>
      <Login />
    </OverLaySocialLogin>
  );
}

const OverLaySocialLogin = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`;
