import React, { useContext, useState } from 'react';

import alertContext from '../../context/alert/alertContext';
import githubContext from '../../context/github/githubContext';

const UsersSearch = () => {
  const [text, setText] = useState('');

  const ghContext = useContext(githubContext);
  const alContext = useContext(alertContext);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alContext.setAlert('Please Enter Something', 'info');
      return;
    }
    ghContext.searchUsers(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={text}
            onChange={onChange}
          />
          <input type="submit" value="Search" />
        </div>
      </form>
      {ghContext.users.length > 0 && (
        <button onClick={ghContext.userClear}>Clear</button>
      )}
    </div>
  );
};

export default UsersSearch;
