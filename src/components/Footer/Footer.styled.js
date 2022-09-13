import styled from 'styled-components';

export const FooterContainer = styled.div.attrs(() => ({
  className: 'border-top text-center pt-3 pb-5 fixed-bottom bg-white',
}))`
  height: 50px;
`;

export const PushContainer = styled.div.attrs(() => ({
  className: 'push',
}))`
  height: 50px;
`;
