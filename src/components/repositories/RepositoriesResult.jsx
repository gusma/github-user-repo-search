import React, { useContext } from 'react';

import githubContext from '../../context/github/githubContext';
import { Loader } from '../index';

const RepositoriesResult = () => {
  const ghContext = useContext(githubContext);

  const { loading, repos } = ghContext;

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        {repos.map((repo) => (
          <div key={repo.id}>
            <a
              href={`https://www.github.com/${repo.full_name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
            <br />
            <small>{repo.owner.login}</small>
            {console.log(repo)}
          </div>
        ))}
      </div>
    );
  }
};

export default RepositoriesResult;
