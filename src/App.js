import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GithubState';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Repositories from './pages/Repositories';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/repositories" element={<Repositories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AlertState>
    </GithubState>
  );
};

export default App;
