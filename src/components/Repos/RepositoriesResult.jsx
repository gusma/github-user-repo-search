import React, { useContext, useState } from 'react';

import githubContext from '../../context/github/githubContext';
import { Loader, NumberItem } from '../index';

const RepositoriesResult = () => {
  const ghContext = useContext(githubContext);

  const { loading, repos } = ghContext;

  const [listView, setListView] = useState(true);

  function limitNameLength(string) {
    if (string.length > 20) {
      return string.substring(0, 20) + '...';
    }
    return string;
  }

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="column">
        <div className="d-flex flex-row-reverse mb-5 border-bottom">
          <button
            className="btn btn-link"
            onClick={() => setListView(!listView)}
          >
            {listView ? 'List view' : 'Grid view'}
          </button>
        </div>
        <div className="row mb-5">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className={
                listView
                  ? 'col-lg-12 col-sm-12 col-md-12 px-2 py-4 border-bottom'
                  : 'col-lg-3 col-sm-6 col-md-3 overflow-hidden p-2 align-items-left w-auto flex-wrap'
              }
            >
              <p className="font-weight-bold mb-1">
                <a
                  href={`https://www.github.com/${repo.full_name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {listView ? repo.name : limitNameLength(repo.name)}
                </a>
              </p>
              <small className=""> {listView ? repo.description : null}</small>
              <small className="">
                {listView
                  ? repo.owner.login
                  : limitNameLength(repo.owner.login)}
              </small>
              <br />
              <div className="d-flex w-100 mt-3">
                <NumberItem info={repo.forks_count} type={'fork'} />
                <NumberItem info={repo.stars_count} type={'stars'} />
                <NumberItem info={repo.forks_count} type={'balls'} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default RepositoriesResult;
