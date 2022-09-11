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
    <div className="text-center py-5">
      <form onSubmit={onSubmit}>
        <div className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={text}
            onChange={onChange}
            className="px-5 py-2 mx-5"
          />
          <input type="submit" value="Search" className="px-5 py-2 mr-5" />
          {ghContext.users.length > 0 && (
            <button className="px-5 py-2 " onClick={ghContext.userClear}>
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UsersSearch;
