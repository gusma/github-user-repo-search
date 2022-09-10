import React from 'react';

import { UsersResult, UsersSearch } from '../components';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <UsersSearch />
    <UsersResult />
  </Layout>
);

export default Home;
