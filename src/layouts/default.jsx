import React from 'react';

import GlobalStyle from '../styleGlobal';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Loader from '../components/Loader';

const DefaultLayout = Content => {
  return () => (
    <>
      <GlobalStyle />
      <Loader />
      <Header />

      <Content />

      <Footer />
    </>
  );
};

export default DefaultLayout;
