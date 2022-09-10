import PropTypes from 'prop-types';
import React from 'react';

import { Alert, Navbar } from '../index';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Alert />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
