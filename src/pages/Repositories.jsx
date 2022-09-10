import React from 'react';

import { Layout } from '../components';
import RepositoriesResult from '../components/repositories/RepositoriesResult';
import RepositoriesSearch from '../components/repositories/RepositoriesSearch';

const Repositories = () => (
  <Layout>
    <RepositoriesSearch />
    <RepositoriesResult />
  </Layout>
);

export default Repositories;
