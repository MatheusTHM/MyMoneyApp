import '../common/template/dependencies';
import React from 'react';
import Header from '../common/template/Header';
import SideBar from '../common/template/SideBar';
import Footer from '../common/template/Footer';
import Routes from './Routes';

const app = () => {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default app;
