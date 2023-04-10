import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import githubButton from '@/assets/githubButton.png';
import kakaoButton from '@/assets/kakaoButton.png';
export default function Login() {
  return (
    <>
      <LoginPage>
        <Overlay></Overlay>
        <SocialLoginBox>
          <Line></Line>
          <WelCome>
            <h1>
              <span>모아모아</span>에 오신걸 환영합니다!
            </h1>
            <SocialButtonBox>
              <GithubButtonBox>
                <GithubButton>
                  <Image
                    fill
                    src={githubButton}
                    alt="깃허브 소셜로그인버튼"
                  ></Image>
                </GithubButton>
                <div>Github로그인</div>
              </GithubButtonBox>
              <KakaoButtonBox>
                <KakaoButton>
                  <Image
                    fill
                    src={kakaoButton}
                    alt="카카오 소셜로그인버튼"
                  ></Image>
                </KakaoButton>
                <div>Kakao로그인</div>
              </KakaoButtonBox>
            </SocialButtonBox>
          </WelCome>
        </SocialLoginBox>
      </LoginPage>
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`;

const LoginPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const SocialLoginBox = styled.div`
  position: absolute;
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

const WelCome = styled.div`
  font-size: 2.5rem;
  font-family: var(--Noto-B);
  text-align: center;
  padding: 3rem;
  & > h1 > span {
    color: #e47474;
  }
`;

const SocialButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
  margin-top: 5rem;
`;

const KakaoButton = styled.div`
  width: 12rem;
  height: 12rem;
  background-color: #ffeb3b;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);

  &:hover {
    scale: 1.025;
  }
  & > div:nth-child(1) {
    width: 10rem;
    height: 10rem;
    left: calc(50% - 5rem);
    top: calc(50% - 5rem);
  }
`;

const GithubButton = styled(KakaoButton)`
  background-color: #000000;
  position: relative;
  & > div {
    width: 8rem;
    height: 8rem;
    left: calc(50% - 4rem);
    top: calc(50% - 4rem);
  }
`;

const GithubButtonBox = styled.div`
  cursor: pointer;
  & > div:nth-child(2) {
    opacity: 0.8;
    margin-top: 2rem;
    color: black;
    font-size: 1.5rem;
    text-align: center;

    ${(props) => props.theme.mq.mobile} {
      zoom: 0.6;
    }
  }
`;

const KakaoButtonBox = styled(GithubButtonBox)``;
