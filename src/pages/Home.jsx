import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import { UsersResult, UsersSearch } from '../components';
import Layout from '../components/Layout';

const Home = ({ title }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        Github Search | Code Challenge for Zebrands \ Gustavo Malamud
      </title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <Layout title={title}>
      <UsersSearch />
      <UsersResult />
    </Layout>
  </>
);

Home.propTypes = {
  title: PropTypes.string,
};

export default Home;
