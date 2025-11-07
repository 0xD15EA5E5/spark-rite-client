import React from 'react';
import Topnav from '~/components/topnav';

const Layout = ({ children }) => {
  return (
    <>
      <Topnav />
      {children}
    </>
  );
}

export default Layout;