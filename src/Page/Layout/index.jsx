import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/index';
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
