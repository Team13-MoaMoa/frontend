import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserId, updateUserImageUrl } from '@/store/user';
import usePreView from '@/hook/usePreview';
import { uploadFile } from '@/api/uploadS3';
import { signUpApi } from '@/api/signUp';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { DEFAULT_PROFILE_URL } from '@/constants/defaultProfile';
import PreviewImage from '@/components/Login/PreviewImage';
import { Empty } from '..';

export default function Step3() {
  const NEXT_PUBLIC_KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;
  const NEXT_PUBLIC_GITHUB_KEY = process.env.NEXT_PUBLIC_GITHUB_KEY;

  const handleLogin = (auth: string | undefined) => {
    const LOGIN_KEY =
      auth === 'kakao' ? NEXT_PUBLIC_KAKAO_KEY : NEXT_PUBLIC_GITHUB_KEY;
    window.location.href = String(LOGIN_KEY);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [previewImage, handleFileInputChange, file] = usePreView();

  const imageHandle = () => {
    inputRef.current?.click();
  };

  const onSubmit = async () => {
    let url: string;

    if (file) {
      url = await uploadFile(file);
      dispatch(updateUserImageUrl(url));
    } else {
      url = DEFAULT_PROFILE_URL;
      dispatch(updateUserImageUrl(DEFAULT_PROFILE_URL));
    }
    dispatch(updateUserId(0));
    const response = await signUpApi(user.user, url);
    if (response.data) {
      localStorage.setItem('user_id', response.data);
    }
    alert('회원가입 완료!');
    handleLogin(user.user.auth_provider);
  };

  return (
    <>
      <Empty />
      <LoginPage>
        <Overlay />
        <SocialLoginBox>
          <Line />
          <LoginContent>
            <h1>
              moamoa님만의 특별한 이미지를 설정해보세요.
              <br />
              물론,언제든지 변경할 수 있어요!
            </h1>
            <InsertImage onClick={imageHandle}>
              <PreviewImage previewImage={previewImage} />
              <HideInput
                type="file"
                ref={inputRef}
                onChange={handleFileInputChange}
              />
            </InsertImage>
            <Buttons>
              <SignUpButton onClick={onSubmit}>
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

const HideInput = styled.input`
  display: none;
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
