import React, { useState } from 'react';
import NavBar from './Nav';
import Footer from './common/Footer';
import OverlaySocialLogin from './Login/OverlaySocialLogin';

export default function Layout({ children }: React.PropsWithChildren) {
  const [isLoginModalClicked, setIsLoginModalClicked] = useState(false);
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
