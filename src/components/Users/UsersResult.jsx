import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import githubContext from '../../context/github/githubContext';
import Loader from '../Loader';

const UsersResult = () => {
  const ghContext = useContext(githubContext);

  const { loading, users } = ghContext;

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
      <div className="row">
        {console.log(users)}
        {users.map((user) => (
          <div
            key={user.id}
            className="col-lg-2 col-sm-6 col-md-3 overflow-hidden p-2 align-items-left w-auto flex-wrap"
          >
            <a
              href={`https://github.com/${user.login}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LazyLoadImage
                alt={user.id}
                height={'150'}
                src={user.avatar_url} // use normal <img> attributes as props
                width={'150'}
              />
              <br />
              <p className="d-inline-block text-truncate text-center">
                {limitNameLength(user.login)}
              </p>
            </a>
          </div>
        ))}
      </div>
    );
  }
};

export default UsersResult;
