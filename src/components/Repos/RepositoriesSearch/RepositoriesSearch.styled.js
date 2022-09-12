import styled from 'styled-components';

export const SearchContainer = styled.div.attrs(() => ({
  className: 'text-center py-5 d-flex justify-content-around',
}))``;

export const FormContainer = styled.form``;

export const FormWrapper = styled.div.attrs(() => ({
  className: 'form',
}))``;

export const TextInput = styled.input.attrs(() => ({
  className: 'px-5 py-2 mx-5',
}))``;

export const SubmitInput = styled.input.attrs(() => ({
  className: 'px-5 py-2 btn btn-primary',
}))``;

export const ClearButton = styled.button.attrs(() => ({
  className: 'ml-5 px-5 py-2 ',
}))``;
