import React from 'react';
import NavBar from './nav';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
