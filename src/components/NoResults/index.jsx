import React from 'react';

import { ResultsH2, ResultsH4, ResultsWrapper } from './NoResults.styled.js';

const NoResults = () => {
  return (
    <>
      <ResultsWrapper>
        <ResultsH2>
          Sorry, we havent been able to find any results for your query.
        </ResultsH2>
        <ResultsH4>Perhaps try again with a different query?</ResultsH4>
      </ResultsWrapper>
    </>
  );
};

export default NoResults;
