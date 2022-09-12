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
} from './RepositoriesSearch.styled';

const RepositoriesSearch = () => {
  const [text, setText] = useState('');

  const ghContext = useContext(githubContext);
  const alContext = useContext(alertContext);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alContext.setAlert('Please fill in with your query', 'info');
      return;
    }
    ghContext.searchRepos(text);
    setText('');
  };

  return (
    <SearchContainer>
      <FormContainer onSubmit={onSubmit}>
        <FormWrapper>
          <TextInput
            type="text"
            name="text"
            placeholder="Search Repositories..."
            value={text}
            onChange={onChange}
          />
          <SubmitInput type="submit" value="Search" className="" />
          {ghContext.repos.length > 0 && (
            <ClearButton onClick={ghContext.repoClear}>Clear</ClearButton>
          )}
        </FormWrapper>
      </FormContainer>
    </SearchContainer>
  );
};

export default RepositoriesSearch;
