import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Layout, RepositoriesResult, RepositoriesSearch } from '../components';

const Repositories = ({ title }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        Github Search | Code Challenge for Zebrands \ Gustavo Malamud
      </title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <Layout title={title}>
      <RepositoriesSearch />
      <RepositoriesResult />
    </Layout>
  </>
);

Repositories.propTypes = {
  title: PropTypes.string,
};

export default Repositories;
