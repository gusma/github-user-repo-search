import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import githubContext from '../../context/github/githubContext';
import { GithubLogo } from '../index';

/* Further explanation on the use of this scss can be found in the file */
import './Navbar.scss';
import {
  HeroContainer,
  LogoContainer,
  RightPlacementContainer,
  TopBarContainer,
} from './Navbar.styled';

const Navbar = (props) => {
  const ghContext = useContext(githubContext);

  return (
    <>
      <TopBarContainer>
        <RightPlacementContainer>
          <Link className="text-white" to="/" onClick={ghContext.userClear}>
            Users
          </Link>
        </RightPlacementContainer>
        <Link
          className="text-white"
          to="/repositories"
          onClick={ghContext.repoClear}
        >
          Repositories
        </Link>
      </TopBarContainer>
      <HeroContainer>
        <LogoContainer>
          <GithubLogo />
          <h2 className="pt-2 ml-3">{props.title}</h2>
        </LogoContainer>
      </HeroContainer>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
