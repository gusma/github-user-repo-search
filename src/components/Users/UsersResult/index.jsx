import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import alertContext from '../../../context/alert/alertContext';
import githubContext from '../../../context/github/githubContext';
import { limitStringLength } from '../../../helpers/limitStringLength';
import { Loader, NoResults } from '../../index';
import { UserContainer } from './UsersResult.styled';

const UsersResult = () => {
  const ghContext = useContext(githubContext);
  const alContext = useContext(alertContext);

  const { loading, searched, users } = ghContext;
  const { alert } = alContext;

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="row">
        {console.log(alert)}
        {searched === true && users.length === 0 && alert !== '' ? (
          <NoResults />
        ) : null}
        {users &&
          users.map((user) => (
            <UserContainer key={user.id}>
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
                  {limitStringLength(user.login, '15')}
                </p>
              </a>
            </UserContainer>
          ))}
      </div>
    );
  }
};

export default UsersResult;
