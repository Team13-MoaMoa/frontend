import useInput from '@/hook/useInput';
import { updateUserNickname } from '@/store/user';
import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Empty } from '..';
import { useRouter } from 'next/router';

export default function Step1() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [nickName, changeHandle] = useInput();

  const nextStepHandle = () => {
    if (nickName === '') {
      alert('닉네임을 입력해주세요!');
      return;
    }
    dispatch(updateUserNickname(nickName));
    router.push('/login/step2');
  };

  return (
    <>
      <Empty />
      <LoginPage>
        <Overlay />
        <SocialLoginBox>
          <Line />
          <LoginContent>
            <h1>우선,사용하실 닉네임을 입력해주세요!</h1>
            <NickNameBox>
              <label htmlFor="nick">닉네임</label>
              <input
                id="nick"
                onChange={changeHandle}
                placeholder="닉네임을 입력해주세요."
              />
            </NickNameBox>
            <NextButton onClick={nextStepHandle}>다음</NextButton>
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
  z-index: 101;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
  & > h1 {
    font-size: 2.5rem;
    font-family: var(--Noto-B);
  }
`;
const NickNameBox = styled.div`
  display: flex;
  align-items: center;

  & > label {
    font-size: 2rem;
    line-height: 3.5rem;
    font-family: var(--Noto-B);
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
  font-size: 2rem;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
