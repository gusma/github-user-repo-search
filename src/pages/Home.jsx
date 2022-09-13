/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';

import { Loader } from '../components';
import Layout from '../components/Layout';

const Home = ({ title }) => {
  const UsersSearchLazy = React.lazy(() =>
    import('../components/Users/UsersSearch'),
  );
  const UsersResultLazy = React.lazy(() =>
    import('../components/Users/UsersResult'),
  );
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Github Search | Code Challenge for Zebrands \ Gustavo Malamud
        </title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Layout title={title}>
        <Suspense fallback={<Loader />}>
          <UsersSearchLazy />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <UsersResultLazy />
        </Suspense>
      </Layout>
    </>
  );
};

Home.propTypes = {
  title: PropTypes.string,
};

export default Home;
