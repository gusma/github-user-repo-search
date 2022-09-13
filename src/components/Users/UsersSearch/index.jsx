import React, { useContext, useState } from 'react';

import alertContext from '../../../context/alert/alertContext';
import githubContext from '../../../context/github/githubContext';
import {
  ClearButton,
  FormContainer,
  FormWrapper,
  SearchContainer,
  SubmitInput,
  TextInput,
} from './UserSearch.styled';

const UsersSearch = () => {
  const [text, setText] = useState('');

  const ghContext = useContext(githubContext);
  const alContext = useContext(alertContext);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alContext.setAlert('Please enter a query for your search.', 'info');
      return;
    }
    ghContext.setSearched();
    ghContext.searchUsers(text);
    alContext.setAlert('');

    setText('');
  };

  return (
    <SearchContainer>
      <FormContainer onSubmit={onSubmit}>
        <FormWrapper>
          <TextInput
            type="text"
            name="text"
            placeholder="Search Users..."
            value={text}
            onChange={onChange}
          />
          <SubmitInput type="submit" value="Search" />

          {ghContext.users.length > 0 && (
            <ClearButton onClick={ghContext.userClear}>Clear</ClearButton>
          )}
        </FormWrapper>
      </FormContainer>
    </SearchContainer>
  );
};

export default UsersSearch;
