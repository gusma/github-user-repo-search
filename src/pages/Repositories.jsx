/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';

import { Layout, Loader } from '../components';

const Repositories = ({ title }) => {
  const RepositoriesSearchLazy = React.lazy(() =>
    import('../components/Repos/RepositoriesSearch'),
  );
  const RepositoriesResultLazy = React.lazy(() =>
    import('../components/Repos/RepositoriesResult'),
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
          <RepositoriesSearchLazy />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <RepositoriesResultLazy />
        </Suspense>
      </Layout>
    </>
  );
};

Repositories.propTypes = {
  title: PropTypes.string,
};

export default Repositories;
