import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './assets/styles/main.scss';
import { Loader } from './components';
import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GithubState';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Repositories from './pages/Repositories';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Home title="Users" />} />
            <Route
              exact
              path="/repositories"
              element={<Repositories title="Repositories" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AlertState>
    </GithubState>
  );
};

export default App;
