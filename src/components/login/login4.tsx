import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import defaultProfile from '@/assets/defaultProfile.png';
export default function Login4() {
  return (
    <>
      <LoginPage>
        <Overlay></Overlay>
        <SocialLoginBox>
          <Line></Line>
          <LoginContent>
            <h1>
              moamoa님만의 특별한 이미지를 설정해보세요.
              <br />
              물론,언제든지 변경할 수 있어요!
            </h1>
            <InsertImage>
              <div>
                <Image fill src={defaultProfile} alt="기본 프로필" />
              </div>
            </InsertImage>
            <Buttons>
              <SignUpButton onClick={() => alert('가입완료!')}>
                <span>가입완료</span>
              </SignUpButton>
            </Buttons>
          </LoginContent>
        </SocialLoginBox>
      </LoginPage>
    </>
  );
}

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #646464;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`;

const LoginPage = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
`;

const SocialLoginBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  height: 35rem;
  background-color: #ffffff;
  border-radius: 1.3rem;
`;

const Line = styled.div`
  background-color: #d9d9d9;
  border-top-left-radius: 1.3rem;
  border-top-right-radius: 1.3rem;
  width: 100%;
  height: 3rem;
`;

const LoginContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #060101;
  text-align: center;
  & > h1 {
    font-size: 1.7rem;
    font-family: var(--Noto-B);
    line-height: 3.5rem;
  }
`;

const InsertImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5rem;
  height: 12.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  & > div {
    position: relative;
    width: 10rem;
    height: 10rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;
const SignUpButton = styled.button`
  background-color: #262626;
  font-family: var(--Noto-B);
  display: flex;
  justify-content: center;
  align-items: center;
  width: max(35px, 9rem);
  height: max(20px, 4rem);
  color: #ffffff;
  border-radius: 5px;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  & > span {
    ${(props) => props.theme.mq.mobile} {
      zoom: 0.6;
    }
  }
`;
