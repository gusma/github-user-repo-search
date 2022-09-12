import styled from 'styled-components';

export const Container = styled.div.attrs((listView) => ({
  className: listView
    ? 'bg-dark d-flex text-white text-center mr-2 py-1 px-2'
    : 'bg-dark d-flex text-white mr-2 px-2 py-1',
}))``;

export const StyledContainer = styled(Container)`
  &:hover {
    background-color: #007bff !important;
  }
  font-size: 0.8rem;
`;

export const InfoItem = styled.div.attrs(() => ({
  className: 'pr-2',
}))``;

export const Icon = styled.span`
  padding-top: -10px !important;
`;
