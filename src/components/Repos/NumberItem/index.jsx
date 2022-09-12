import PropTypes from 'prop-types';
import React from 'react';

import { Eye, Fork, Star } from '../../index';
import { Icon, InfoItem, StyledContainer } from './NumberItem.styled';

const NumberItem = ({ info, type }) => {
  const icon =
    type === 'Forks' ? <Fork /> : type === 'Stars' ? <Star /> : <Eye />;
  const infoItem = info ? info : '--';

  return (
    <StyledContainer title={`${infoItem} ${type}`}>
      <InfoItem>{infoItem}</InfoItem>
      <Icon>{icon}</Icon>
    </StyledContainer>
  );
};

NumberItem.propTypes = {
  info: PropTypes.any,
  type: PropTypes.string,
  listView: PropTypes.boolean,
};

export default NumberItem;
