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
    <div>
      <form onSubmit={onSubmit}>
        <div className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Repositories..."
            value={text}
            onChange={onChange}
          />
          <input type="submit" value="Search" />
        </div>
      </form>
      {ghContext.repos.length > 0 && (
        <button onClick={ghContext.repoClear}>Clear</button>
      )}
    </div>
  );
};

export default RepositoriesSearch;
