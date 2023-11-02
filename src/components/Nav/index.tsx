import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import avatar from '@/assets/avatar.png';
import person from '@/assets/person.png';
import logout from '@/assets/logout.png';
import Image from 'next/image';
import useWindow from '@/hook/useWindow';
import hamburger from '@/assets/hamburger.png';
import logo from '@/assets/logo.png';
import close from '@/assets/close.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useDispatch } from 'react-redux';
import { updateUserId } from '@/store/user';
import { logoutApi } from '@/api/logout';

type NavbarProps = {
  setIsLoginModalClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavBar({ setIsLoginModalClicked }: NavbarProps) {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const dispatch = useDispatch();

  const authProvider = useSelector(
    (state: RootState) => state.user.user.auth_provider,
  );
  const [profileToggle, setProfileToggle] = useState(false);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [sideToggle, setSideToggle] = useState(false);
  const window = useWindow();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const shiftSideBar = () => {
    setSideToggle(true);
  };

  const closeSidebar = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = (e.target as HTMLInputElement).id;
    if (id === 'over') {
      setSideToggle((pre) => !pre);
    }
  };

  const signOut = async () => {
    await logoutApi(authProvider);
    setIsLogin(false);
    dispatch(updateUserId(0));
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  useEffect(() => {
    if (window.width! <= 480) {
      setHamburgerToggle(true);
    } else {
      setHamburgerToggle(false);
    }
  }, [window]);
  useEffect(() => {
    const handleCloseModal = (e: Event | React.MouseEvent) => {
      if (
        profileToggle &&
        (!dropdownRef.current ||
          !dropdownRef.current!.contains(e.target as Node))
      )
        setProfileToggle(false);
    };

    document.addEventListener('mousedown', handleCloseModal);
    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [dropdownRef, profileToggle, window]);
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    token && setIsLogin(true);
  }, []);

  return (
    <Nav style={{ position: 'sticky' }}>
      <AnimatePresence>
        {sideToggle ? (
          <Overlay id="over" onClick={closeSidebar}>
            <Sidebar
              initial={{ right: -200 }}
              animate={{ right: 0 }}
              exit={{ right: -200 }}
              transition={{
                opacity: { duration: 1 },
              }}
            >
              <div>
                <div onClick={() => setSideToggle((pre) => !pre)}>
                  <Image fill src={close} alt="사이드 바 닫기" />
                </div>
              </div>
              <div onClick={() => router.push('/write')}>새 글쓰기</div>
              <div onClick={() => router.push('/note')}>쪽지</div>
            </Sidebar>
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Container>
        <Logo onClick={() => router.push('/')}>
          <Image fill src={logo} alt="이미지" />
        </Logo>
        {isLogin ? (
          <SelectList>
            {hamburgerToggle ? (
              <ToggleIcon onClick={shiftSideBar}>
                <Image fill src={hamburger} alt="햄버거 토글"></Image>
              </ToggleIcon>
            ) : (
              <>
                <li onClick={() => router.push('/write')}>새 글쓰기</li>
                <li onClick={() => router.push('/note')}>쪽지</li>
                <Profile>
                  <ProfileImg
                    id="profile"
                    onClick={() => setProfileToggle((pre) => !pre)}
                  >
                    <Image fill src={avatar} alt="프로필" />
                  </ProfileImg>
                  <AnimatePresence>
                    {profileToggle ? (
                      <ProfileToggleBox
                        initial={{ top: 45, opacity: 0 }}
                        animate={{ top: 52, opacity: 1 }}
                        exit={{ top: 45, opacity: 0 }}
                        transition={{
                          duration: 0.2,
                        }}
                        ref={dropdownRef}
                      >
                        <div>
                          <MyPageIcon>
                            <Image fill src={person} alt="마이페이지" />
                          </MyPageIcon>
                          <div>마이페이지</div>
                        </div>
                        <div onClick={signOut}>
                          <MyPageIcon>
                            <Image fill src={logout} alt="로그아웃" />
                          </MyPageIcon>
                          <div>로그아웃</div>
                        </div>
                      </ProfileToggleBox>
                    ) : null}
                  </AnimatePresence>
                </Profile>
              </>
            )}
          </SelectList>
        ) : (
          <LoginButton onClick={() => setIsLoginModalClicked(true)}>
            Log In
          </LoginButton>
        )}
      </Container>
    </Nav>
  );
}

const Nav = styled.div`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  position: relative;
  z-index: 100;
`;

const Overlay = styled.div`
  position: fixed;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 9;
`;
const Sidebar = styled(motion.div)`
  width: 200px;
  height: 100vh;
  background-color: white;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-size: 4rem;

  & > div:nth-child(1) {
    padding: 1rem;
    font-size: 6.5rem;
    position: relative;
    border-bottom: 1px solid rgb(146, 146, 146, 0.5);
    //코드 리뷰하고 pr올리고 합치기
    //

    & > div {
      cursor: pointer;
      height: 20px;
      width: 20px;
      font-size: 5rem;
      position: relative;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  & > div:not(:first-of-type) {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 1rem;
    height: 50px;
    border-bottom: 1px solid rgb(146, 146, 146, 0.5);
    &:hover {
      background-color: rgb(146, 146, 146, 0.2);
    }
  }
`;
const Logo = styled.div`
  position: relative;
  height: 6rem;
  width: 15rem;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 3rem;
  height: 100%;
  margin: 0 auto;
`;

const SelectList = styled.ul`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  & > li {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const ToggleIcon = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2rem;
  cursor: pointer;
`;

const Profile = styled.div`
  position: relative;
`;
const ProfileImg = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const ProfileToggleBox = styled(motion.div)`
  position: absolute;
  width: 15rem;
  height: 12.5rem;
  top: 20px;
  right: -50%;
  background: #ffffff;
  border: 0.3px solid #957f6a;
  box-shadow: 0px 20px 24px -4px rgba(45, 54, 67, 0.04),
    0px 8px 11px -4px rgba(45, 54, 67, 0.04);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--Noto-B);
  font-size: 1.8rem;
  color: ${(props) => props.theme.main_brown};
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 4rem;
    cursor: pointer;
    border-bottom: 1px solid #f0f3f9;
    &:hover {
      opacity: 0.8;
    }
  }

  & > div:nth-child(2) > div:nth-child(2) {
    position: relative;
    right: 1.5rem;
  }
`;

const MyPageIcon = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
`;
const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 4rem;
  background-color: #957f6a;
  background: #957f6a;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.04);
  border-radius: 6px;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
