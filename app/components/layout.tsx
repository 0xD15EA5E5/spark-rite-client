import React from 'react';
import Topnav from '~/components/topnav';

const Layout = ({ children }) => {
  return (
    <div className='overflow-x-hidden'>
      <Topnav />
      {children}
    </div>
  );
}

export default Layout;