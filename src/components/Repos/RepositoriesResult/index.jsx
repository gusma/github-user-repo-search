import React, { useContext, useState } from 'react';

import githubContext from '../../../context/github/githubContext';
import { Card, Loader } from '../../index';
import {
  MainContainer,
  ResultsWrapper,
  ViewOptionsContainer,
} from './RepositoriesResult.styled';

const RepositoriesResult = () => {
  const ghContext = useContext(githubContext);

  const { loading, repos } = ghContext;

  const [listView, setListView] = useState(false);

  const showViewOptions =
    repos && repos.length > 0 ? (
      <ViewOptionsContainer>
        <button className="btn btn-link" onClick={() => setListView(!listView)}>
          {listView ? 'Grid view' : 'List view'}
        </button>
      </ViewOptionsContainer>
    ) : null;

  if (loading) {
    return <Loader />;
  } else {
    return (
      <MainContainer>
        {showViewOptions}
        <ResultsWrapper>
          {repos.map((repo) => (
            <>
              <Card repo={repo} listView={listView} />
            </>
          ))}
        </ResultsWrapper>
      </MainContainer>
    );
  }
};

export default RepositoriesResult;
