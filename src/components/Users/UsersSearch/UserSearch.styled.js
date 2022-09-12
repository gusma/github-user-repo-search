import styled from 'styled-components';

export const SearchContainer = styled.div.attrs(() => ({
  className: 'text-center py-1 pb-5',
}))``;

export const FormContainer = styled.form``;

export const FormWrapper = styled.div.attrs(() => ({
  className: 'form row justify-content-center',
}))``;

export const TextInput = styled.input.attrs(() => ({
  className: 'col col-12 col-xl-8 py-2 my-2',
}))``;

export const SubmitInput = styled.input.attrs(() => ({
  className: 'col col-12 col-xl-1 mx-xl-3 px-1 py-2 btn btn-primary my-2',
}))``;

export const ClearButton = styled.button.attrs(() => ({
  className: 'col col-12 col-xl-1 px-1 py-2 my-2 btn btn-light',
}))``;
