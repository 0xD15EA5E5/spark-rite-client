import React from 'react';
import Topnav from '~/components/topnav';

const Layout = ({ children }) => {
  return (
    <div className='overflow-x-hidden bg-neutral-50 text-slate-950'>
      <Topnav />
      {children}
    </div>
  );
}

export default Layout;