import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import Login from '@/components/login';

export default function OverlaySocialLogin() {
  const closeModalHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const OverlayClassName = 'css-j8i9ny';
    const clickClassName = e.target as HTMLDivElement;
    if (clickClassName.className === OverlayClassName) {
      setModal(false);
    }
  };

  const [modal, setModal] = useState(true);

  return (
    <>
      {modal ? (
        <OverLaySocialLogin id="overlay" onClick={closeModalHandler}>
          <Login />
        </OverLaySocialLogin>
      ) : null}
    </>
  );
}

const OverLaySocialLogin = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;
