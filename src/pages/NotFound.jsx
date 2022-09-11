import React from 'react';
import { Helmet } from 'react-helmet';

import { Layout } from '../components';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Content not found | Code Challenge for Zebrands \ Gustavo Malamud
        </title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Layout>
        <h1>404 Not Found</h1>
        <p className="lead">
          The page you are looking for doesn&apos;t exist...
        </p>
      </Layout>
    </>
  );
};

export default NotFound;
