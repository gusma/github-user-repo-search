import PropTypes from 'prop-types';
import React from 'react';

import { NumberItem } from '../../../';
import { limitStringLength } from '../../../../helpers/limitStringLength';
import { CardContainer, NameContainer, SocialsContainer } from './Card.styled';

const Card = ({ repo, listView }) => {
  const repoName =
    repo.name && listView ? repo.name : limitStringLength(repo.name, 20);
  const description = repo.description && listView ? repo.description : null;

  return (
    <CardContainer
      key={repo.id}
      className={
        listView
          ? 'col-lg-12 col-sm-12 col-md-12 px-2 py-4 border-bottom'
          : 'col-lg-3 col-sm-6 col-md-3 overflow-hidden px-2 py-4 align-items-left text w-auto flex-wrap'
      }
    >
      <NameContainer>
        <a
          href={`https://www.github.com/${repo.full_name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repoName}
        </a>
      </NameContainer>
      <small> {description}</small>
      <small>
        {listView ? repo.owner.login : limitStringLength(repo.owner.login, 20)}
      </small>
      <br />
      <SocialsContainer>
        <NumberItem info={repo.forks_count} type={'Forks'} />
        <NumberItem info={repo.stargazers_count} type={'Stars'} />
        <NumberItem info={repo.watchers_count} type={'Watchers'} />
      </SocialsContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  repo: PropTypes.object,
  listView: PropTypes.bool,
};

export default Card;
