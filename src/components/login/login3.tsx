import useInput from '@/hook/useInput';
import { Step } from '@/types/login';
import styled from '@emotion/styled';
import React from 'react';

export default function Login3({ setStep, setUser }: Step) {
  const [gitAddress, gitChangeHandle] = useInput();
  const [portfolioAddress, portfolioChangeHandle] = useInput();

  const nextStep = () => {
    if (gitAddress === '' || portfolioAddress === '') {
      alert('깃허브주소 또는 포트폴리오주소를 입력해주세요 !');
      return;
    }
    setStep(3);
    setUser((pre) => ({
      ...pre,
      gitAddress,
      portfolioAddress,
    }));
  };

  const skipStep = () => {
    setStep(3);
  };

  return (
    <>
      <LoginPage>
        <Overlay></Overlay>
        <SocialLoginBox>
          <Line></Line>
          <LoginContent>
            <h1>
              moamoa님,반가워요.
              <br />
              깃허브 주소나 포트폴리오 링크를 입력해주세요.
            </h1>
            <NickNameBox>
              <label htmlFor="git">개인 깃허브 주소</label>
              <input
                onChange={gitChangeHandle}
                id="git"
                placeholder="개인 깃허브 주소를 입력해주세요."
              />
            </NickNameBox>
            <NickNameBox>
              <label htmlFor="portfolio">포트폴리오 주소</label>
              <input
                onChange={portfolioChangeHandle}
                id="portfolio"
                placeholder="포트폴리오 주소를 입력해주세요."
              />
            </NickNameBox>
            <Buttons>
              <NextButton onClick={nextStep}>다음</NextButton>
              <SkipButton onClick={skipStep}>건너뛰기</SkipButton>
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
const NickNameBox = styled.div`
  display: flex;
  align-items: center;

  & > label {
    font-size: 1.2rem;
    line-height: 3.5rem;
    font-family: var(--Noto-B);
    ${(props) => props.theme.mq.mobile} {
      zoom: 0.8;
    }
    cursor: pointer;
  }

  & > input {
    width: 40rem;
    height: 4.2rem;
    color: #ffffff;
    border: 1px solid #afbaca;
    border-radius: 0.8rem;
    margin-left: 1.4rem;
    padding-left: 1rem;
    color: black;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 0.4em;
    }

    ${(props) => props.theme.mq.mobile} {
      zoom: 0.8;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  ${(props) => props.theme.mq.mobile} {
    zoom: 0.8;
  }
`;
const NextButton = styled.button`
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
  margin-right: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

const SkipButton = styled(NextButton)`
  ${(props) => props.theme.mq.mobile} {
    width: max(50px, 9rem);
    height: max(20px, 4rem);
  }
`;
