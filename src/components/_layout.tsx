import React, { useEffect, useState } from 'react';
import NavBar from './Nav';
import Footer from './common/Footer';
import OverlaySocialLogin from './Login/OverlaySocialLogin';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '@/store/user';

export default function Layout({ children }: React.PropsWithChildren) {
  const [isLoginModalClicked, setIsLoginModalClicked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('access_token');
      const userId = localStorage.getItem('user_id');
      if (!token && userId) {
        setIsSignUp(true);
      } else if (token) {
        dispatch(setIsLogin(true));
      } else if (!token) {
        dispatch(setIsLogin(false));
      }
    }
  }, [dispatch]);
  return (
    <>
      <NavBar setIsLoginModalClicked={setIsLoginModalClicked} />
      {isLoginModalClicked && (
        <OverlaySocialLogin setIsLoginModalClicked={setIsLoginModalClicked} />
      )}
      <div>{children}</div>
      <Footer />
    </>
  );
}
function setIsSignUp(arg0: boolean) {
  throw new Error('Function not implemented.');
}
