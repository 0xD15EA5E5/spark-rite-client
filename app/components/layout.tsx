import React from 'react';
import Topnav from '~/components/topnav';
import { Footer } from './footer';

const Layout = ({ children }) => {
  return (
    <div className='overflow-x-hidden bg-neutral-50 text-slate-950'>
      <Topnav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;