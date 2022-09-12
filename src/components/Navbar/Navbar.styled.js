import styled from 'styled-components';

export const TopBarContainer = styled.div.attrs(() => ({
  className: 'row navbar-dark bg-dark px-5 py-2 justify-content-end',
}))``;

export const RightPlacementContainer = styled.div.attrs(() => ({
  className: 'mr-5',
}))``;

export const HeroContainer = styled.div.attrs(() => ({
  className:
    'row flex-nowrap justify-content-between align-self-centered align-items-center p-5 mb-5 bg-secondary text-white navbar__main-container',
}))``;

export const LogoContainer = styled.div.attrs(() => ({
  className: 'row flex',
}))``;
