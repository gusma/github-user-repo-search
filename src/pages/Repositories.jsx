import React from 'react';
import { Helmet } from 'react-helmet';

import { Layout, RepositoriesResult, RepositoriesSearch } from '../components';

const Repositories = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        Github Search | Code Challenge for Zebrands \ Gustavo Malamud
      </title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <Layout>
      <RepositoriesSearch />
      <RepositoriesResult />
    </Layout>
  </>
);

export default Repositories;
