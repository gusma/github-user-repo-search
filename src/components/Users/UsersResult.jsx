import React, { useContext } from 'react';

import githubContext from '../../context/github/githubContext';
import Loader from '../Loader';

const UsersResult = () => {
  const ghContext = useContext(githubContext);

  const { loading, users } = ghContext;

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <a
              href={`https://github.com/${user.login}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={user.avatar_url} alt={user.id} />
              <br />
              {user.login}
            </a>
          </div>
        ))}
      </div>
    );
  }
};

export default UsersResult;
