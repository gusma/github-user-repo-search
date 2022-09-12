import PropTypes from 'prop-types';
import React from 'react';

import { Fork, Star } from '../../index';

const NumberItem = ({ listView, info, type }) => {
  const numberItemContainer = listView
    ? 'col-1 bg-dark text-white text-center mr-2 py-1'
    : 'bg-dark text-white mr-2 px-2 py-1';
  const icon = type === 'fork' ? <Fork /> : type === 'stars' ? <Star /> : '';
  const infoItem = info ? info : '--';

  return (
    <div className={numberItemContainer}>
      <span className="pr-2">{infoItem}</span>
      {icon}
    </div>
  );
};

NumberItem.propTypes = {
  info: PropTypes.any,
  type: PropTypes.string,
  listView: PropTypes.boolean,
};

export default NumberItem;
