import React, { useContext, useState } from 'react';

import alertContext from '../../context/alert/alertContext';
import githubContext from '../../context/github/githubContext';

const RepositoriesSearch = () => {
  const [text, setText] = useState('');

  const ghContext = useContext(githubContext);
  const alContext = useContext(alertContext);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alContext.setAlert('Please fill in with your query', 'info');
      return;
    }
    ghContext.searchRepos(text);
    setText('');
  };

  return (
    <div className="text-center py-5 d-flex justify-content-around">
      <form onSubmit={onSubmit}>
        <div className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Repositories..."
            value={text}
            onChange={onChange}
            className="px-5 py-2 mx-5"
          />
          <input
            type="submit"
            value="Search"
            className="px-5 py-2 btn btn-primary"
          />
          {ghContext.repos.length > 0 && (
            <button className="ml-5 px-5 py-2 " onClick={ghContext.repoClear}>
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RepositoriesSearch;
