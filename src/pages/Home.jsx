import React from 'react';
import { Helmet } from 'react-helmet';

import { UsersResult, UsersSearch } from '../components';
import Layout from '../components/Layout';

const Home = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        Github Search | Code Challenge for Zebrands \ Gustavo Malamud
      </title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <Layout>
      <UsersSearch />
      <UsersResult />
    </Layout>
  </>
);

export default Home;
