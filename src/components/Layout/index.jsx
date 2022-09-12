import PropTypes from 'prop-types';
import React from 'react';

import { Alert, Footer, Navbar } from '../index';

const Layout = ({ children, title }) => {
  return (
    <>
      <div className="container">
        <Navbar title={title} />
        <Alert />
        {children}
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  props: PropTypes.any,
  title: PropTypes.string,
};

export default Layout;
