import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import avatar from '@/assets/avatar.png';
import person from '@/assets/person.png';
import logout from '@/assets/logout.png';
import Image from 'next/image';
import useWindow from '@/hook/useWindow';
import hamburger from '@/assets/hamburger.png';
import logo from '@/assets/logo.png';
import close from '@/assets/close.png';
import { AnimatePresence, motion } from 'framer-motion';
export default function NavBar() {
  const [user, setUser] = useState(true); //유저가 있다면
  const [profileToggle, setProfileToggle] = useState(false);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [sideToggle, setSideToggle] = useState(false);
  const window = useWindow();

  const shiftSideBar = () => {
    setSideToggle(true);
  };

  const closeSidebar = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = (e.target as HTMLInputElement).id;
    if (id === 'over') {
      setSideToggle((pre) => !pre);
    }
  };

  useEffect(() => {
    if (window.width! <= 480) {
      setHamburgerToggle(true);
    } else {
      setHamburgerToggle(false);
    }
  }, [window]);

  return (
    <Nav>
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
              <div>프로젝트 관리</div>
              <div>새 글쓰기</div>
              <div>쪽지</div>
            </Sidebar>
          </Overlay>
        ) : null}
      </AnimatePresence>

      <Logo>
        <Image fill src={logo} alt="이미지"></Image>
      </Logo>
      {user ? (
        <AfterLoginBox>
          <SelectList>
            {hamburgerToggle ? (
              <ToggleIcon onClick={shiftSideBar}>
                <Image fill src={hamburger} alt="햄버거 토글"></Image>
              </ToggleIcon>
            ) : (
              <>
                <li>프로젝트 관리</li>
                <li>새 글쓰기</li>
                <li>쪽지</li>
                <Profile
                  id="profile"
                  onClick={() => setProfileToggle((pre) => !pre)}
                >
                  <Image fill src={avatar} alt="프로필" />
                </Profile>
                <AnimatePresence>
                  {profileToggle ? (
                    <ProfileToggleBox
                      initial={{ top: 45, opacity: 0 }}
                      animate={{ top: 58, opacity: 1 }}
                      exit={{ top: 45, opacity: 0 }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <div>
                        <MyPageIcon>
                          <Image fill src={person} alt="마이페이지" />
                        </MyPageIcon>
                        <div>마이페이지</div>
                      </div>
                      <div>
                        <MyPageIcon>
                          <Image fill src={logout} alt="로그아웃" />
                        </MyPageIcon>
                        <div>로그아웃</div>
                      </div>
                    </ProfileToggleBox>
                  ) : null}
                </AnimatePresence>
              </>
            )}
          </SelectList>
        </AfterLoginBox>
      ) : (
        <BeforeLoginBox>Log In</BeforeLoginBox>
      )}
    </Nav>
  );
}

const Nav = styled.div`
  width: 100%;
  height: 7rem;
  background: #f9f8f7;
  border-bottom: 1px solid #5e718d;
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
  position: absolute;
  top: calc(50% - 3rem);
  left: 3rem;

  height: 6rem;
  width: 15rem;
  cursor: pointer;
`;

const AfterLoginBox = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;
`;

const SelectList = styled.ul`
  height: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > li {
    margin-right: 4rem;
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

const Profile = styled.li`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
`;

const ProfileToggleBox = styled(motion.div)`
  position: absolute;
  width: 15rem;
  height: 12.5rem;

  background: #ffffff;
  border: 0.3px solid #957f6a;
  box-shadow: 0px 20px 24px -4px rgba(45, 54, 67, 0.04),
    0px 8px 11px -4px rgba(45, 54, 67, 0.04);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-family: var(--Noto-B);

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
const BeforeLoginBox = styled.div`
  background-color: #957f6a;
  width: 8rem;
  height: 4.8rem;

  background: #957f6a;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.04);
  border-radius: 6px;
  color: #ffffff;
  font-family: var(--Noto-B);
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 11rem;
  top: calc(50% - 2.4rem);

  &:hover {
    opacity: 0.8;
  }
`;
