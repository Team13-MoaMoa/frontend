import React from 'react';
import NavBar from './nav';
import Footer from './common/Footer';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
