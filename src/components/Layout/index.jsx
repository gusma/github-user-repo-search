import PropTypes from 'prop-types';
import React from 'react';

import { Alert, Footer, Navbar } from '../index';

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Alert />
        {children}
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
