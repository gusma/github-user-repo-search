import PropTypes from 'prop-types';
import React from 'react';

import { AlertComponent, Footer, Navbar } from '../index';
import { LayoutContainer, PushContainer } from './Layout.styled';

const Layout = ({ children, title }) => {
  return (
    <>
      <LayoutContainer>
        <Navbar title={title} />
        <AlertComponent />
        {children}
        <PushContainer></PushContainer>
        <Footer />
      </LayoutContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};

export default Layout;
